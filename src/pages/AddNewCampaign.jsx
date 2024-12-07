import React, { useState, useContext } from 'react';
import { AuthContext } from '../auth/AuthProvider'; 
import Swal from 'sweetalert2'; 
const AddNewCampaing = () => {
  const { user } = useContext(AuthContext); 

  const [imageURL, setImageURL] = useState('');
  const [title, setTitle] = useState('');
  const [campaignType, setCampaignType] = useState('personal issue');
  const [description, setDescription] = useState('');
  const [donationAmount, setDonationAmount] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCampaign = {
      imageURL,
      title,
      campaignType,
      description,
      donationAmount,
      deadline,
      userEmail: user?.email,
      userName: user?.displayName,
    };
    console.log(newCampaign);

    fetch('http://localhost:5000/crowds/',{
        method:'POST',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify(newCampaign)
    })
    .then(res=>res.json())
    .then(data=>{
        Swal.fire({
            title: 'Success!',
            text: 'Your campaign has been added successfully.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
    })

  

    setImageURL('');
    setTitle('');
    setCampaignType('personal issue');
    setDescription('');
    setDonationAmount('');
    setDeadline('');
  };

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-200 mt-10">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-gray-800">Add New Campaign</h2>
      <form onSubmit={handleSubmit} className="space-y-8">
       
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Image URL</label>
          <input
            type="text"
            name="img"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
            placeholder="Enter Image URL"
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          />
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Campaign Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Campaign Title"
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          />
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Campaign Type</label>
          <select
            name="campaignType"
            value={campaignType}
            onChange={(e) => setCampaignType(e.target.value)}
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          >
            <option value="personal issue">Personal Issue</option>
            <option value="startup">Startup</option>
            <option value="business">Business</option>
            <option value="creative ideas">Creative Ideas</option>
          </select>
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe your campaign"
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          />
        </div>

       
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Minimum Donation Amount</label>
          <input
            type="number"
            name="donationAmount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            placeholder="Enter minimum donation amount"
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          />
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Deadline</label>
          <input
            type="date"
            name="deadline"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
            className="w-full p-4 mt-2 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300"
            required
          />
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Email (Read Only)</label>
          <input
            type="text"
            name="email"
            value={user?.email || ''}
            className="w-full p-4 mt-2 border-2 rounded-lg bg-gray-100 cursor-not-allowed shadow-md"
            readOnly
          />
        </div>

        
        <div className="form-group">
          <label className="block text-xl font-medium text-gray-700">Name (Read Only)</label>
          <input
            type="text"
            name="name"
            value={user?.displayName || ''}
            className="w-full p-4 mt-2 border-2 rounded-lg bg-gray-100 cursor-not-allowed shadow-md"
            readOnly
          />
        </div>

       
        <div className="form-group">
          <button
            type="submit"
            className="w-full p-4 mt-6 bg-blue-600 text-white font-bold text-xl rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Add Campaign
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNewCampaing;
