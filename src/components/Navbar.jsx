import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthProvider";
import navLogo from "../assets/business-crowdfundingLogo.jpg";
import ThemToggol from "./ThemToggol";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);

  // Handle logout
  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("User logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  return (
    <div className="shadow-lg sticky top-0 z-10">
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
              <li>
                <NavLink
                  to="/"
                  className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mycampaing"
                  className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
                >
                  My Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/allcampaing"
                  className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
                >
                  All Campaign
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/mydonation"
                  className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
                >
                  My Donation
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/addnewcampaing"
                  className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
                >
                  Add New Campaign
                </NavLink>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img className="h-14" src={navLogo} alt="Business Logo" />
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mycampaing"
                className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
              >
                My Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/allcampaing"
                className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
              >
                All Campaign
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mydonation"
                className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
              >
                My Donation
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/addnewcampaing"
                className="text-lg font-semibold ml-2 capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
              >
                Add New Campaign
              </NavLink>
            </li>
          </ul>
        </div>
       
        {/* Right Section */}
        <div className="navbar-end flex items-center gap-4">
           <p> <ThemToggol></ThemToggol> </p>
          {user ? (
            <> 
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User"}
                  className="w-10 h-10 rounded-full border"
                />
                <span className="text-lg font-semibold">
                  {user.email || "Anonymous"}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-[#00D9E9] text-white px-4 py-2 rounded-lg hover:bg-[#00D9E9] transition-all"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-[#00D9E9] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-[#00D9E9] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
