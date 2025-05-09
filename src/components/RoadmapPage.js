import React from 'react';

const RoadmapPage = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-5xl font-bold">Power Of Decentralized AI
        Vortrex Network</h1>
      </header>

      {/* Timeline Line with Milestones */}
      <div className="relative max-w-6xl mx-auto px-4 mb-10">
        {/* Line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full z-0"></div>
        
        {/* Dots */}
        <div className="relative z-10 flex justify-between px-4">
          <div className="w-5 h-5 bg-red-500 border-4 border-black rounded-full"></div>
          <div className="w-5 h-5 bg-red-500 border-4 border-black rounded-full"></div>
          <div className="w-5 h-5 bg-red-500 border-4 border-black rounded-full"></div>
        </div>
      </div>

      {/* Roadmap Phases Section */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col md:flex-row justify-center gap-6">
            
            {/* Phase 1 */}
            <div className="flex-1 bg-gray-900 border border-pink-500 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">Cross Chain</h2>
              <ul className="space-y-2 text-sm">
                <li>Trade in ETH, SOL, BNB, BASE and other networks in a single terminal, place smart orders and stop losses</li>
          
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="flex-1 bg-gray-900 border border-pink-500 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">AI Analyzer</h2>
              <ul className="space-y-2 text-sm">
                <li>AI analyzes the smart contract, transactions and winning potential, suggesting assets to buy and telling you when it's best to buy and when it's best to sell</li>
                
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="flex-1 bg-gray-900 border border-pink-500 rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-transform">
              <h2 className="text-2xl font-semibold text-orange-400 mb-4">Memecoin & Token Launchpad</h2>
              <ul className="space-y-2 text-sm">
                <li>Fueling creativity with a secure, AI-enhanced platform for launching tokens, enabling users to create and monetize meme economies with ease.</li>
            
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;
