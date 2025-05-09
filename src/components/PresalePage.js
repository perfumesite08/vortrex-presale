import React from 'react';

const PresalePage = () => {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center p-10">
        <h1 className="text-5xl font-extrabold text-[#00FF9F]">Vortrex Token Presale</h1>
        <p className="mt-4 text-xl text-gray-300">Limited time presale available now!</p>
        <button className="mt-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform">
          Buy Now
        </button>
      </header>

      {/* Presale Countdown Section */}
      <section className="text-center py-10">
        <h2 className="text-3xl font-semibold text-[#00FF9F]">Presale Countdown</h2>
        <p className="text-xl mt-4 text-gray-300">00:00:00</p>
      </section>

      {/* Security Features Section */}
      <section className="py-10">
        <h2 className="text-3xl text-center text-[#00FF9F]">Security Features</h2>
        <p className="mt-4 text-center text-gray-300">
          Your investment is safe with us. We use top-level encryption and have KYC in place.
        </p>
      </section>
    </div>
  );
};

export default PresalePage;
