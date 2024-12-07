import { Link, useLoaderData } from "react-router-dom";

const SeeMore = () => {
  const oneData = useLoaderData();
  const { _id, imageURL, campaignType, title, deadline, description, donationAmount } = oneData;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="md:w-1/3">
          <img
            src={imageURL}
            alt={title || "Campaign Image"}
            className="rounded-lg w-full h-auto"
          />
        </div>

        {/* Details Section */}
        <div className="md:w-2/3 md:pl-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Campaign Type:</span> {campaignType}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Deadline:</span>{" "}
            {new Date(deadline).toLocaleDateString()}
          </p>
          <p className="text-lg text-gray-600 mb-2">
            <span className="font-semibold">Donation Amount:</span> ${donationAmount}
          </p>
          <p className="text-gray-700 text-justify mt-4 leading-7">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-6 text-center">
        <Link to="/" className="px-6 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default SeeMore;
