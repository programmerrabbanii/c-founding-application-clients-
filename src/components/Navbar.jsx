import { Link, NavLink } from "react-router-dom";
import navLogo from "../assets/business-crowdfundingLogo.jpg";

const Navbar = () => {
  const link = (
    <>
      <li className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9]">
        <NavLink to="/" activeClassName="text-blue-700">
          Home
        </NavLink>
      </li>
      <li className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9]">
        <NavLink to="/mycampaing" activeClassName="text-blue-700">
          My Campaign
        </NavLink>
      </li>
      <li className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9]">
        <NavLink to="/allcampaing" activeClassName="text-blue-700">
          All Campaign
        </NavLink>
      </li>
      <li className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9]">
        <NavLink to="/mydonation" activeClassName="text-blue-700">
          My Donation
        </NavLink>
      </li>
      <li className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9]">
        <NavLink to="/addnewcampaing" activeClassName="text-blue-700">
          Add New Campaign
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-lg">
      <div className="navbar bg-base-100 max-w-7xl mx-auto px-4">
        {/* Left Section */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to="/">
            <img className="h-14" src={navLogo} alt="Business Logo" />
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end">
          <Link
            to="/register"
            className="btn bg-[#00D9E9] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Login
          </Link>
        </div>
      </div> 
    </div> 
  );
};

export default Navbar;
