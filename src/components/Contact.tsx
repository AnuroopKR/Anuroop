// components/Contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-600 mb-12">
          Have a project in mind, a question, or just want to connect? Feel free to drop me a message below or email me directly.
        </p>

        <form className="bg-orange-50 p-8 rounded-2xl shadow-md space-y-6 text-left">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Tell me about your project or just say hi..."
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            ✉️ Send Message
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Or email me directly: <span className="text-orange-500 font-medium">anuroopkr13@gmail.com</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
