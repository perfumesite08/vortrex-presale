import React from 'react';

const TokenInfoPage = () => {
  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] via-[#2e1f4f] to-[#42275a] text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center p-10">
        <h1 className="text-5xl font-extrabold text-[#ff9a00] drop-shadow-md">Vortrex Token (VTX)</h1>
        <p className="mt-4 text-xl text-[#ffdab9]">The future of decentralized finance is here!</p>
      </header>

      {/* Token Details Section */}
      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold text-[#ffa500]">Token Details</h2>
        <ul className="mt-4 text-[#fcd9b8] space-y-2">
          <li>Symbol: <span className="text-white">VTX</span></li>
          <li>Total Supply: <span className="text-white">1,000,000,000 VTX</span></li>
          <li>Blockchain: <span className="text-white">Binance Smart Chain (BEP-20)</span></li>
        </ul>

        {/* Tokenomics Image */}
        <div className="mt-10">
          <img 
            src="/images/vtx_tokenomics.png" 
            alt="VTX Tokenomics"
            className="mx-auto w-[600px] h-[350px] object-contain rounded-xl shadow-xl border border-[#ffa500]/40"
          />
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-10">
        <h2 className="text-3xl font-semibold text-[#ffb347] text-center">Use Cases</h2>
        <p className="mt-4 text-center text-[#fbd7c3] max-w-3xl mx-auto">
          VTX is designed to power staking, governance participation, and utility transactions
          within the Vortrex DeFi ecosystem — making your holdings more valuable and powerful over time.
        </p>
      </section>

      {/* Purchase Button Section */}
      <section className="text-center py-10">
        <button className="bg-gradient-to-r from-[#f83600] to-[#f9d423] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform">
          Purchase VTX Token
        </button>
      </section>
    </div>
  );
};

export default TokenInfoPage;
