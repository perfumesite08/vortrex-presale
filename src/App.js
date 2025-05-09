import React, { useState, useEffect } from 'react';
import './index.css';
import { Contract, BrowserProvider, parseEther, parseUnits, formatUnits } from 'ethers';
import HomePage from './components/HomePage';
import TokenInfoPage from './components/TokenInfoPage';
import RoadmapPage from './components/RoadmapPage';
import ContactPage from './components/ContactPage';

const App = () => {
  const [amount, setAmount] = useState("1");
  const [totalTokens, setTotalTokens] = useState(69000);
  const [paymentMethod, setPaymentMethod] = useState('USDT');
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [presaleEnded, setPresaleEnded] = useState(false);
  const [tokensSold, setTokensSold] = useState(0);
  const [tokensForSale, setTokensForSale] = useState(0);

  const DEMO_MODE = true;

  const USDT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955";
  const PRESALE_ADDRESS = "0xb89816EA8e48bDb1856c2124cdf5Bfcc845D8889";

  const USDT_ABI = [
    "function approve(address spender, uint256 amount) public returns (bool)",
    "function balanceOf(address account) external view returns (uint256)",
    "function allowance(address owner, address spender) external view returns (uint256)"
  ];

  const PRESALE_ABI = [
    "function buyWithBNB() external payable",
    "function buyWithUSDT(uint256 usdtAmount) external",
    "function tokensSold() external view returns (uint256)",
    "function tokensForSale() external view returns (uint256)",
    "function isPresaleEnded() external view returns (bool)",
    "function USDT_RATE() external view returns (uint256)",
    "function BNB_RATE() external view returns (uint256)"
  ];

  useEffect(() => {
    updateTokenEstimation();
    fetchPresaleStatus();
  }, [amount, paymentMethod]);

  const updateTokenEstimation = () => {
    const numericAmount = parseFloat(amount);
    if (!isNaN(numericAmount)) {
      if (paymentMethod === 'USDT') {
        setTotalTokens(numericAmount * 69000);
      } else if (paymentMethod === 'BNB') {
        setTotalTokens(numericAmount * 41400000);
      }
    } else {
      setTotalTokens(0);
    }
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const provider = new BrowserProvider(window.ethereum);
        const accounts = await provider.send('eth_requestAccounts', []);
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setIsConnected(true);
          alert('✅ MetaMask Connected!');
        }
      } catch (error) {
        console.error('Connection error:', error);
        alert('Error connecting to MetaMask.');
      }
    } else {
      alert('MetaMask not detected.');
    }
  };

  const buyTokens = async () => {
    if (!isConnected) return alert('Connect wallet first');

    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const presale = new Contract(PRESALE_ADDRESS, PRESALE_ABI, signer);

    try {
      const numericAmount = parseFloat(amount);
      if (isNaN(numericAmount) || numericAmount <= 0) {
        return alert("Enter a valid amount");
      }

      if (paymentMethod === 'BNB') {
        const tx = await presale.buyWithBNB({ value: parseEther(numericAmount.toString()) });
        await tx.wait();
        alert(`✅ BNB Payment Success! You bought ${Math.floor(totalTokens).toLocaleString()} VTX`);
      } else if (paymentMethod === 'USDT') {
        const usdt = new Contract(USDT_ADDRESS, USDT_ABI, signer);
        const usdtAmount = parseUnits(numericAmount.toString(), 18);
        const approveTx = await usdt.approve(PRESALE_ADDRESS, usdtAmount);
        await approveTx.wait();
        const buyTx = await presale.buyWithUSDT(usdtAmount);
        await buyTx.wait();
        alert(`✅ USDT Payment Success! You bought ${Math.floor(totalTokens).toLocaleString()} VTX`);
      }
      fetchPresaleStatus();
    } catch (err) {
      console.error(err);
      alert('❌ Transaction Failed');
    }
  };

  const fetchPresaleStatus = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum || window);
      const presale = new Contract(PRESALE_ADDRESS, PRESALE_ABI, provider);

      const ended = await presale.isPresaleEnded();
      const sold = await presale.tokensSold();
      const total = await presale.tokensForSale();

      setPresaleEnded(ended);
      setTokensSold(Number(formatUnits(sold, 18)));
      setTokensForSale(Number(formatUnits(total, 18)));
    } catch (err) {
      console.error('Error fetching presale status', err);
    }
  };

  const calculateProgress = () => {
    if (DEMO_MODE) return 76;
    if (tokensForSale === 0) return 0;
    const progress = (tokensSold / tokensForSale) * 100;
    return Math.min(100, Math.floor(progress));
  };

  return (
    <div className="font-sans text-white bg-black">
      <HomePage />
      <section className="bg-gray-900 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 p-1 rounded-3xl shadow-lg">
          <div className="bg-gray-900 rounded-3xl p-6 md:p-8">

            <div className="flex items-center gap-4 mb-6">
              <img src="/images/coin-icon.png" alt="FDR Coin" className="w-16 h-16" />
              <div>
                <p className="text-lg font-semibold text-white">VTX = 0.000014</p>
                <p className="text-green-400 text-sm">+10% Next Price</p>
                <p className="text-yellow-400 text-sm">Listing VTX = $0.000029</p>
              </div>
            </div>

            <button
              onClick={connectWallet}
              className="w-full mb-4 py-2 rounded text-white font-medium bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform"
            >
              {isConnected ? '✅ Wallet Connected' : 'Connect MetaMask'}
            </button>
            {isConnected && <p className="text-sm text-gray-400 mb-4 text-center break-words">{walletAddress}</p>}

            <p className={`text-center mb-4 text-lg font-semibold ${presaleEnded ? 'text-red-400' : 'text-green-400'}`}>
              Presale Status: {presaleEnded ? 'Ended ❌' : 'Live ✅'}
            </p>

            <div className="bg-gray-800 rounded p-3 text-center mb-4">
              <p className="text-yellow-300 font-semibold mb-2">🔥 VTX Tokens Selling Fast</p>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-yellow-400 to-red-500 h-4"
                  style={{ width: `${calculateProgress()}%`, transition: 'width 0.5s ease' }}
                ></div>
              </div>
            </div>

            <p className="text-white font-medium mb-2">Step 1 - Select the payment method</p>
            <div className="flex justify-between items-center gap-3 mb-4">
              <button
                onClick={() => setPaymentMethod('USDT')}
                className={`flex-1 px-4 py-2 rounded-full text-white flex flex-col items-center justify-center gap-1 text-sm ${paymentMethod === 'USDT' ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gray-800'} transition-transform hover:scale-105`}
              >
                <img src="/images/usdt.png" alt="USDT" className="w-5 h-5" />
                <span className="text-base">USDT</span>
                <span className="text-xs text-gray-300">BEP-20</span>
              </button>
              <button
                onClick={() => setPaymentMethod('BNB')}
                className={`flex-1 px-4 py-2 rounded-full text-white flex flex-col items-center justify-center gap-1 text-sm ${paymentMethod === 'BNB' ? 'bg-gradient-to-r from-purple-600 to-pink-500' : 'bg-gray-800'} transition-transform hover:scale-105`}
              >
                <img src="/images/bnb.png" alt="BNB" className="w-5 h-5" />
                <span className="text-base">BNB</span>
                <span className="text-xs text-gray-300">BEP-20</span>
              </button>
            </div>

            <input
              type="text"
              value={amount}
              onChange={(e) => {
                const val = e.target.value;
                if (val === "" || (!isNaN(val) && Number(val) >= 0)) {
                  setAmount(val);
                }
              }}
              className="w-full px-4 py-2 mb-3 bg-gray-800 text-white border border-yellow-400 rounded focus:outline-none"
              placeholder={`Enter Amount (in ${paymentMethod})`}
            />

            <p className="text-gray-300 mb-1 text-sm">
              {paymentMethod === 'USDT' ? "1 USDT = 69,000 VTX" : "1 BNB = 41,400,000 VTX"}
            </p>
            <p className="text-yellow-300 text-sm mb-2">
              You'll receive ≈ {Math.floor(totalTokens).toLocaleString()} VTX
            </p>

            <button
              onClick={buyTokens}
              className="mt-6 w-full py-2 rounded bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold hover:scale-105 transition-transform"
            >
              Buy Tokens
            </button>
          </div>
        </div>
      </section>

      <TokenInfoPage />
      <RoadmapPage />
      <ContactPage />
    </div>
  );
};

export default App;
