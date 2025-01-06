import React from "react";

const News = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-4xl font-bold mb-4">📩 Stay Updated!</h2>
        <p className="text-lg mb-8">
          Subscribe to our newsletter to get the latest updates, insights, and news delivered to your inbox.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered w-full md:w-2/3 lg:w-1/3 px-4 py-3 rounded-md text-gray-800"
          />
          <button className="btn btn-primary w-full md:w-auto px-6 py-3">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
