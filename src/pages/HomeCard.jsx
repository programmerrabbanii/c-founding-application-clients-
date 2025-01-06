import moment from "moment";
import { Link } from "react-router-dom";

const HomeCard = ({ homeCollection }) => {
  const { _id, imageURL, campaignType, deadline } = homeCollection;

  return (
    <div className=" py-4">
      <div className="card bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 min-h-[400px] ">
        {/* Image */}
        <figure>
          <img
            className="h-48 w-full object-cover"
            src={imageURL}
            alt="Campaign Image"
          />
        </figure>
        <div className="card-body flex flex-col flex-grow p-6">
          {/* Campaign Type and Deadline */}
          <div className="text-sm text-gray-500 mb-3">
            <p className="capitalize mb-1">
              <span className="font-semibold">Type:</span> {campaignType}
            </p>
            <p>
              <span className="font-semibold">Deadline:</span>{" "}
              {moment(deadline, "D-M-YYYY").format("MMMM D, YYYY")}
            </p>
          </div>
          {/* See More Button */}
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
