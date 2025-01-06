import React from "react";
import crown from "../assets/crowd.jpg"
import mission from "../assets/mission.jpg"
import join from "../assets/joinus.jpg"
import success from "../assets/success.jpg"

const AboutPage = () => {
  return (
    <div className="about-page bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-extrabold text-indigo-900 drop-shadow-md">
            About Us
          </h1>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Empowering Dreams, One Contribution at a Time.
          </p>
        </div>

        {/* Section 1: Introduction */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img
              src={crown}
              alt="Crowdfunding Illustration"
              className="rounded-2xl shadow-lg w-full hover:opacity-95 transition-opacity"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              What is Crowdfunding?
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Crowdfunding is a revolutionary platform connecting individuals
              with creative ideas, meaningful causes, or ambitious projects
              with people willing to support them financially. Be it personal
              needs like medical expenses, innovative ventures like apps or
              films, or launching a groundbreaking startup, we make dreams
              possible.
            </p>
          </div>
        </section>

        {/* Section 2: Our Mission */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img
              src={mission}
              alt="Mission Illustration"
              className="rounded-2xl shadow-lg w-full hover:opacity-95 transition-opacity"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              We are dedicated to empowering individuals and communities by
              offering a platform that bridges the gap between aspirations and
              opportunities. Our goal is to inspire generosity, drive
              innovation, and make meaningful change accessible to all.
            </p>
          </div>
        </section>

        {/* Section 3: Success Stories */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          <div className="lg:w-1/2">
            <img
              src={success}
              alt="Success Stories"
              className="rounded-2xl shadow-lg w-full hover:opacity-95 transition-opacity"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Success Stories
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our platform has enabled countless inspiring journeys. From
              life-saving medical treatments to the launch of successful
              startups, these stories highlight the transformative power of
              collective support and the resilience of human spirit.
            </p>
          </div>
        </section>

        {/* Section 4: Join Us */}
        <section className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img
              src={join}
              alt="Join Us Illustration"
              className="rounded-2xl shadow-lg w-full hover:opacity-95 transition-opacity"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Join Us Today
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Become a part of something bigger. Whether you wish to start your
              own campaign or support others in achieving their goals, our
              platform equips you with the tools needed to make a lasting
              impact. Together, we shape a brighter future.
            </p>
            <button className="mt-8 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
              Get Started
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
