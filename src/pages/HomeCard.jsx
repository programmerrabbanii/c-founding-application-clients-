import moment from "moment";
import { Link } from "react-router-dom";
const HomeCard = ({ homeCollection }) => {
  const { _id, imageURL, campaignType, title, deadline } = homeCollection;

  return (
    <div>
      <div className="card bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105 min-h-[400px] flex flex-col">
        <figure>
          <img
            className="h-48 w-full object-cover"
            src={imageURL}
            alt={title || "Campaign Image"}
          />
        </figure>
        <div className="card-body flex flex-col flex-grow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
          <p className="text-sm text-gray-500 mb-4 capitalize">
            {campaignType}
          </p>
          <p>{moment(deadline, "D-M-YYYY").format("MMMM-D-YYYY")}</p>
          <div className="mt-auto">
            <Link
              to={`/seemore/${_id}`}
              className="btn btn-primary w-full py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1 transition"
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
