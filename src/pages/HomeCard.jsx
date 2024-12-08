import moment from "moment";
import { Link } from "react-router-dom";

const HomeCard = ({ homeCollection }) => {
  const { _id, imageURL, campaignType, title, deadline } = homeCollection;

  return (
    <div className="flex justify-center py-4">
      <div className="card bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 min-h-[400px] flex flex-col max-w-sm w-full">
        <figure>
          <img
            className="h-48 w-full object-cover"
            src={imageURL}
            alt={title || "Campaign Image"}
          />
        </figure>
        <div className="card-body flex flex-col flex-grow p-6">
          <h2 className="text-2xl font-semibold text-gray-800  hover:text-blue-600 transition-colors duration-200">{title}</h2>
          <p className="text-sm text-gray-500  capitalize">{campaignType}</p>
          <p className="text-lg font-medium text-gray-700 ">
            <span className="font-semibold">Deadline:</span>{" "}
            {moment(deadline, "D-M-YYYY").format("MMMM D, YYYY")}
          </p>
          <div className="mt-auto">
            <Link
              to={`/seemore/${_id}`}
              className="btn w-full py-2 text-lg capitalize rounded-md text-white bg-[#00D9E9] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition duration-200"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
