import React from 'react';

const ContactUs = () => {
  return ( 
    <section className="bg-gradient-to-r from-blue-400 to-bg-[#00D9E9] py-16">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
        <p className="text-xl mb-8">We'd love to hear from you. Drop us a message, and we'll get back to you as soon as possible!</p>
        
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl">
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold text-gray-700" htmlFor="name">Full Name</label>
            <input type="text" id="name" className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-left text-lg font-semibold text-gray-700" htmlFor="email">Email Address</label>
            <input type="email" id="email" className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label className="block text-left text-lg font-semibold text-gray-700" htmlFor="message">Your Message</label>
            <textarea id="message" rows="4" className="w-full p-4 border border-gray-300 rounded-lg mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your message" />
          </div>
          <button className="w-full bg-[#00D9E9] text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
