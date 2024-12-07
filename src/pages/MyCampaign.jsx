import React, { useEffect, useState } from "react";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const userEmail = "user@example.com"; // এখানে ইউজারের ইমেইল ব্যবহার করো (লগড-ইন ইউজারের ইমেইল)।

  useEffect(() => {
    const fetchCampaigns = async () => {
      const response = await fetch(
        `http://localhost:5000/myCampaign?email=${userEmail}`
      );
      const data = await response.json();
      setCampaigns(data);
    };
    fetchCampaigns();
  }, [userEmail]);

  const handleDelete = async (id) => {
    const response = await fetch(`http://localhost:5000/crowds/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-center text-2xl font-bold mb-6">My Campaigns</h2>
      <table className="table-auto w-full border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-4 py-2">Title</th>
            <th className="border px-4 py-2">Type</th>
            <th className="border px-4 py-2">Deadline</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td className="border px-4 py-2">{campaign.title}</td>
              <td className="border px-4 py-2">{campaign.campaignType}</td>
              <td className="border px-4 py-2">
                {new Date(campaign.deadline).toLocaleDateString()}
              </td>
              <td className="border px-4 py-2 text-center">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => alert("Update feature coming soon")}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(campaign._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyCampaign;
