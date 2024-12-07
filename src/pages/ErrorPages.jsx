import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-primary">404</h1>
      <p className="text-2xl font-semibold mt-4 text-gray-700">
        Oops! The page you're looking for doesn't exist.
      </p>
      <p className="text-lg mt-2 text-gray-500">
        It might have been moved or deleted. Please check the URL or head back to the homepage.
      </p>
      <Link to="/" className="btn btn-primary mt-6">
        Go to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
