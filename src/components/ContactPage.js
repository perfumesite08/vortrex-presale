import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-10">
      {/* Roadmap Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold">Vortrex Roadmap</h1>
        <p className="mt-2 text-lg text-gray-300">A Glimpse into Our Future</p>
      </header>

      {/* Roadmap Phases */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Phase 1 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-yellow-500">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">Phase 1: Development & Presale</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Launch Presale</li>
            <li>Community Engagement</li>
            <li>AI Development</li>
            <li>Building Ecosystem</li>
          </ul>
        </div>

        {/* Phase 2 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-400 mb-4">Phase 2: Community Launch</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Product Launch</li>
            <li>Active Growth</li>
            <li>Listing</li>
            <li>Scaling</li>
          </ul>
        </div>

        {/* Phase 3 */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg border-l-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-blue-400 mb-4">Phase 3: Official Launch</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Product Promotion</li>
            <li>Major Exchanges</li>
            <li>Building API</li>
            <li>Infrastructure</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-2xl mx-auto mt-16 bg-gray-800 p-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6 text-yellow-400">Contact Us</h2>
        <p className="text-center text-gray-300 mb-8">Have any questions? Reach out to us!</p>
        <form className="space-y-6">
          <div>
            <label className="block mb-2 text-gray-300">Your Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Your Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-300">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-full hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
