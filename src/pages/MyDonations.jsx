import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";

const MyDonations = () => {
    const { user } = useContext(AuthContext);
    const [mydonate, setMydonate] = useState([]);
  
    useEffect(() => {
        if (!user?.email) return; 
    
        const getDonate = async () => {
            try {
                const response = await fetch(`http://localhost:5000/donate/${user.email}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setMydonate(data);
            } catch (error) {
                console.error("Error fetching donations:", error);
            }
        };
    
        getDonate();
    }, [user?.email]);


    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">My Donations</h1>
            {mydonate.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mydonate.map((donation) => (
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
            ) : (
                <p className="text-center text-gray-500">No donations found.</p>
            )}
        </div>
    );
};

export default MyDonations;
