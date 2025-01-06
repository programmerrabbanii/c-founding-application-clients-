import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const AllCampaign = () => {
  const allDatas = useLoaderData();
  const [sortedData, setSortedData] = useState(allDatas);
  const [isDescending, setIsDescending] = useState(true);

  // Toggle sorting order
  const toggleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a.deadline);
      const dateB = new Date(b.deadline);
      return isDescending ? dateA - dateB : dateB - dateA;
    });
    setSortedData(sorted);
    setIsDescending(!isDescending);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">All Campaigns</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleSort}
            className="px-4 py-2 bg-[#00D9E9] text-white rounded shadow hover:bg-blue-600 transition-all"
          >
            Sort by Deadline ({isDescending ? "Descending" : "Ascending"})
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedData.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
            >
              <img
                src={campaign.imageURL || "https://via.placeholder.com/300"} // Placeholder if no image provided
                alt={campaign.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {campaign.title}
                </h3>
                <p className="text-gray-500 mb-2 capitalize">
                  Type: {campaign.campaignType}
                </p>
                <p className="text-gray-500 mb-2">
                  Deadline: {new Date(campaign.deadline).toLocaleDateString()}
                </p>
                <p className="text-gray-600 font-medium mb-4">
                  Donation: ${campaign.donationAmount}
                </p>
                <Link
                  to={`/seemore/${campaign._id}`}
                  className="block text-center bg-[#00D9E9] text-white py-2 rounded shadow hover:bg-blue-600 transition-all"
                >
                  See More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
