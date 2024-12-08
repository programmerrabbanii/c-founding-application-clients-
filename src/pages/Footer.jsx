import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Column 1: Contact Information */}
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul>
              <li className="text-lg text-gray-400 mb-2">
                <a href="FundingApplication@gmail.com" className="hover:text-teal-400"> FundingApplication@gmail.com</a>
              </li>
              <li className="text-lg text-gray-400 mb-2">+123 456 7890</li>
              <li className="text-lg text-gray-400">123 Campaign St, City, Country</li>
            </ul>
          </div>
            
          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul>
              <li><Link to="/" className="text-lg text-gray-400 hover:text-teal-400 transition duration-300">Home</Link></li>

              <li><Link to="mycampaing" className="text-lg text-gray-400 hover:text-teal-400 transition duration-300">My Campaing</Link></li>
              <li><Link Link to="/allcampaing" className="text-lg text-gray-400 hover:text-teal-400 transition duration-300">All Campaing</Link></li>
              <li><Link to="/mydonation" className="text-lg text-gray-400 hover:text-teal-400 transition duration-300">My Donation</Link></li>
              <li><Link to="/addnewcampaing" className="text-lg text-gray-400 hover:text-teal-400 transition duration-300">Add New Campaing</Link></li>
            </ul>
          </div> 

          
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-6">
              <a href="#" className="text-2xl text-gray-400 hover:text-teal-400 transition duration-300">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-teal-400 transition duration-300">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-teal-400 transition duration-300">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-teal-400 transition duration-300">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        
        <div className="text-center text-gray-400 mt-12">
          <p>&copy; 2024  Crowd Funding Application
          . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
