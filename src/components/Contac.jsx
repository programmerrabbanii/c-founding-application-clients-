import React, { useState } from 'react';

const Contac = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="mt-4 text-gray-600">Have a question? We are here to help!</p>
      </div>

      <div className="mt-10 max-w-lg mx-auto">
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-lg rounded-lg space-y-6">
          <div>
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="text-sm font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="w-full py-3 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contac;
