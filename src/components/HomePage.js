import React, { useEffect, useState } from 'react';
import {
  FaShieldAlt,
  FaRocket,
  FaCogs,
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const CYCLE_DURATION = 48 * 60 * 60 * 1000; // 48 hours in milliseconds

    const getNextCycleEnd = () => {
      const now = new Date().getTime();
      const elapsed = now % CYCLE_DURATION;
      return now + (CYCLE_DURATION - elapsed);
    };

    let targetDate = getNextCycleEnd();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      let distance = targetDate - now;

      if (distance <= 0) {
        targetDate = getNextCycleEnd();
        distance = targetDate - now;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans text-white bg-gradient-to-b from-orange-900 via-rose-800 to-black scroll-smooth">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex justify-between items-center h-16">
          <div className="text-2xl font-bold text-yellow-400 tracking-wide">Vortrex</div>
          <nav className="hidden md:flex space-x-4 text-white text-base">
            {['Home', 'Features', 'Presale', 'Roadmap', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 rounded-full bg-orange-800 hover:bg-yellow-400 hover:text-black transition duration-300 font-medium"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-xl focus:outline-none"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden bg-black px-6 py-6 space-y-4 rounded-b-xl shadow-lg border-t border-gray-700">
            {['Home', 'Features', 'Presale', 'Roadmap', 'Contact'].map((item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="block text-white px-4 py-2 rounded-lg bg-orange-800 hover:bg-yellow-400 hover:text-black transition duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </header>

      <div className="h-16"></div>

      {/* Hero Section */}
      <section
        className="text-center py-24 px-4 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1606787627690-2d5107a74138?auto=format&fit=crop&w=1080&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-amber-300">
            Experience the future of DeFi with Vortrex
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-10">
            Vortrex is a revolutionary DeFi platform redefining yield automation and liquidity flow.
            Smart auto-compounding and market-driven optimization on Sonic chain. Let your assets grow effortlessly in the new age of crypto!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <button className="bg-gradient-to-r from-orange-500 to-pink-600 px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
              ← Purchase Token →
            </button>
            <button className="bg-gradient-to-r from-rose-500 to-yellow-500 px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-transform">
              ← Read Documents →
            </button>
          </div>

          <p className="text-sm mb-2 text-orange-400">Presale ends in:</p>

          {/* Countdown */}
          <div className="flex justify-center gap-8 text-3xl font-semibold text-white mt-6">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div>{String(item.value).padStart(2, '0')}</div>
                <div className="text-sm text-orange-300">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
