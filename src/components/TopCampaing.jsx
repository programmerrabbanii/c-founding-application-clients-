import React from "react";
import { FaTree, FaSolarPanel, FaHandHoldingMedical } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRatedCampaigns = () => {
  const campaigns = [
    {
      id: 1,
      title: "Save the Rainforest",
      description: "Join us in preserving the Amazon rainforest for future generations.",
      icon: <FaTree className="text-green-500 text-6xl" />,
    },
    {
      id: 2,
      title: "Innovative Solar Panels",
      description: "Help us develop cost-effective and efficient solar panels for a greener planet.",
      icon: <FaSolarPanel className="text-yellow-500 text-6xl" />,
    },
    {
      id: 3,
      title: "Medical Aid for All",
      description: "Support affordable healthcare initiatives for underprivileged communities.",
      icon: <FaHandHoldingMedical className="text-red-500 text-6xl" />,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-50 via-gray-100 to-blue-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          ✨ Top-Rated Campaigns
        </h2>
        <p className="text-lg text-gray-600 mb-10">
          Explore and support campaigns that make a difference!
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className="bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300 p-6"
            >
              <div className="flex justify-center mb-4">{campaign.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {campaign.title}
              </h3>
              <p className="text-gray-600 mb-6">{campaign.description}</p>
              <Link to="/support" className="btn bg-[#00D9E9] w-full">Support Now</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedCampaigns;
