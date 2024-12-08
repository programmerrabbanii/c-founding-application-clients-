import { Link, useLoaderData } from "react-router-dom";

const AllCampaign = () => {
  const allDatas = useLoaderData();
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">All Campaigns</h2>
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-[#00D9E9] text-white">
              <tr>
                <th className="px-6 py-3 text-left">#</th>
                <th className="px-6 py-3 text-left">Title</th>
                <th className="px-6 py-3 text-left">Type</th>
                <th className="px-6 py-3 text-left">Deadline</th>
                <th className="px-6 py-3 text-left">Donation Amount</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allDatas.map((allData, index) => (
                <tr key={allData._id} className="hover:bg-gray-100 transition-all">
                  <td className="px-6 py-4 text-gray-800 font-semibold">{index + 1}</td>
                  <td className="px-6 py-4 text-gray-800 font-semibold">{allData.title}</td>
                  <td className="px-6 py-4 text-gray-500 capitalize">{allData.campaignType}</td>
                  <td className="px-6 py-4 text-gray-500">{new Date(allData.deadline).toLocaleDateString()}</td>
                  <td className="px-6 py-4 text-gray-600 font-medium">${allData.donationAmount}</td>
                  <td className="px-6 py-4 text-center">
                    <Link
                      to={`/seemore/${allData._id}`}
                      className="text-[#00D9E9] hover:text-blue-800 font-medium transition-colors duration-300"
                    >
                      See More
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllCampaign;
