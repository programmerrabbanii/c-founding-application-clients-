import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import Swal from 'sweetalert2';  
import { Link } from "react-router-dom";

const MyCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const response = await fetch(
          `https://assignment-ten-server-tawny-pi.vercel.app/my-campaing/${user?.email}`
        );
        const data = await response.json();
        setCampaigns(data); 
      } catch (error) {
        console.error("Error fetching campaigns:", error);
      }
    };

    if (user?.email) {
      fetchCampaigns();
    }
  }, [user?.email]);

  const handleDelete = async (id) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this campaign?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`https://assignment-ten-server-tawny-pi.vercel.app/crowds/${id}`, {
            method: "DELETE",
          });
          if (response.ok) {
            setCampaigns(campaigns.filter((campaign) => campaign._id !== id));
            Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
          } else {
            Swal.fire("Failed!", "There was an error deleting the campaign.", "error");
          }
        } catch (error) {
          console.error("Error deleting campaign:", error);
          Swal.fire("Error!", "Something went wrong. Please try again later.", "error");
        }
      }
    });
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">My Campaigns</h2>
      {campaigns.length > 0 ? (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Type</th>
              <th className="border px-4 py-2 text-left">Deadline</th>
              <th className="border px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign) => (
              <tr key={campaign._id} className="hover:bg-gray-100">
                <td className="border px-4 py-2">{campaign.title}</td>
                <td className="border px-4 py-2">{campaign.campaignType}</td>
                <td className="border px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border px-4 py-2 text-center">

                  <Link to={`/update/${campaign._id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
                    onClick={() => alert("Update feature coming soon")}
                  >
                    Update
                  </Link>

                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
                    onClick={() => handleDelete(campaign._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      ) : (
        <div className="text-center py-6">
          <h3 className="text-xl font-semibold">No campaigns found.</h3>
        </div>
      )}
    </div>
  );
};

export default MyCampaign;
