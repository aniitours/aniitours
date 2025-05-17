import React from 'react';

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg mx-16 mr-24">
      <h3 className="text-xl font-semibold mb-6 font-poppins text-center">Send us your query</h3>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <select className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500">
            <option>Tour Type</option>
          </select>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            placeholder="Arrival Date"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="date"
            placeholder="Departure Date"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="number"
            placeholder="Adults"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <input
            type="number"
            placeholder="Kids (5-12 yrs)"
            className="w-full text-gray-500 px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded-3xl border bg-gray-200 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
        ></textarea>
        <button className="w-full text-gray-500 bg-[#1E1D4C] text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Send Query
        </button>
      </form>
    </div>
  );
};

export default ContactForm;