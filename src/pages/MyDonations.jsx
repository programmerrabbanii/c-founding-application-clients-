import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyDonations = () => {
    const myDonate = useLoaderData();

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Donations</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {myDonate.map((donation) => (
                    <div
                        key={donation._id}
                        className="card shadow-lg p-4 rounded-md border border-gray-200"
                    >
                        <img
                            src={donation.imageURL}
                            alt={donation.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{donation.title}</h2>
                        <p className="text-gray-600 mb-2">
                            <strong>Type:</strong> {donation.campaignType}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <strong>Deadline:</strong> {donation.deadline}
                        </p>
                        <p className="text-gray-700 mb-4">{donation.description}</p>
                        <p className="font-bold text-lg mb-2">
                            Donated Amount: ${donation.donationAmount}
                        </p>
                        <p className="text-gray-500 text-sm">
                            <strong>Donor:</strong> {donation.userName} ({donation.userEmail})
                        </p>
                    </div>
                ))}
            </div>
        </div> 
    );
};

export default MyDonations;
