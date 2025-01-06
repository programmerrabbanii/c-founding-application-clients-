import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
  const campaign = useLoaderData(); 
  const navigate = useNavigate();

  const [updatedCampaign, setUpdatedCampaign] = useState({
    title: campaign.title || '',
    campaignType: campaign.campaignType || '',
    deadline: campaign.deadline || '',
  });

  const handleChange = (e) => {
    setUpdatedCampaign({
      ...updatedCampaign,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`https://assignment-ten-server-tawny-pi.vercel.app/crowds/${campaign._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCampaign),
    });

    if (response.ok) {
      Swal.fire('Success', 'Campaign updated successfully', 'success');
      navigate('/my-campaigns'); 
    } else {
      Swal.fire('Error', 'Failed to update campaign', 'error');
    }
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h2 className="text-center text-3xl font-bold mb-6">Update Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={updatedCampaign.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="campaignType" className="block text-sm font-medium">Campaign Type</label>
          <input
            type="text"
            id="campaignType"
            name="campaignType"
            value={updatedCampaign.campaignType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium">Deadline</label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={updatedCampaign.deadline}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-md">Update</button>
        </div>
      </form>
    </div>
  );
};

export default Update;
