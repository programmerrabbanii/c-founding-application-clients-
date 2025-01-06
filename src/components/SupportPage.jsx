import React from "react";
import davit from "../assets/davit.jpg"

const SupportPage = () => {
  return (
    <div className="support-page bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-gray-800 drop-shadow-md">
            Support
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            How can we help you? Explore resources and get in touch for support.
          </p>
        </div>

        {/* Section 1: FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                What is crowdfunding?
              </h3>
              <p className="text-gray-600 mt-2">
                Crowdfunding is a way to raise money for projects, ideas, or
                causes by collecting contributions from a large number of
                people.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                How do I start a campaign?
              </h3>
              <p className="text-gray-600 mt-2">
                To start a campaign, sign up, create a project page, and share
                it with your network to gather support.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Is there a fee for using the platform?
              </h3>
              <p className="text-gray-600 mt-2">
                Yes, a small platform fee is charged to cover operational
                expenses, ensuring seamless service.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Contact Support */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img
              src={davit}
              alt="Contact Support"
              className="rounded-2xl shadow-lg w-full hover:opacity-95 transition-opacity"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Need Assistance?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our dedicated support team is here to assist you. Reach out to us
              via email or phone, and we’ll ensure your queries are resolved
              promptly.
            </p>
            <div className="mt-8 space-y-4">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> FundingApplication@gmail.com
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Phone:</span> +88 (800) 1798950302
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Resources */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
            Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                User Guide
              </h3>
              <p className="text-gray-600 mt-2">
                Learn how to navigate and use our platform with step-by-step
                instructions.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Community Guidelines
              </h3>
              <p className="text-gray-600 mt-2">
                Understand our community standards and ensure a positive
                experience for everyone.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-gray-700">
                Troubleshooting
              </h3>
              <p className="text-gray-600 mt-2">
                Find solutions to common issues and resolve them quickly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: Feedback */}
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            We Value Your Feedback
          </h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Help us improve by sharing your thoughts and suggestions. Your
            feedback makes us better.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
            Share Feedback
          </button>
        </section>
      </div>
    </div>
  );
};

export default SupportPage;
