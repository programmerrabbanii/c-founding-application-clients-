import { Link, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthProvider";
import navLogo from "../assets/business-crowdfundingLogo.jpg";
import ThemToggol from "./ThemToggol";

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleLogout = () => {
    logOutUser()
      .then(() => {
        console.log("User logged out successfully!");
      })
      .catch((error) => {
        console.error("Logout Error:", error);
      });
  };

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          About Us
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/support"
          className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          Support
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/mycampaing"
            className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
          >
            My Campaign
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to="/allcampaing"
          className=" capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          All Campaign
        </NavLink>
      </li>
      {
        user? <li>
        <NavLink
          to="/mydonation"
          className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
        >
          My Donation
        </NavLink>
      </li> : null
      }
      {user && (
        <li>
          <NavLink
            to="/addnewcampaing"
            className="capitalize hover:text-[#00D9E9] active:text-[#00D9E9]"
          >
            Add New Campaign
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <div className="shadow-lg sticky top-0 z-10 backdrop-blur-md bg-blend-overlay">
      <div className="navbar w-11/12 mx-auto px-4">
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
              {links}
            </ul>
          </div>
          <Link to="/">
            <img className="h-14" src={navLogo} alt="Business Logo" />
          </Link>
        </div>

        {/* Center Section */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        {/* Right Section */}
        <div className="navbar-end flex items-center gap-4">
          <p>
            <ThemToggol />
          </p>
          {user ? (
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full border-4 border-gray-500 cursor-pointer"
                src={user.photoURL}
                alt="User"
                onClick={handleClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              {(isHovered || isClicked) && (
                <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-xl p-4 w-48 text-center">
                  <p className="font-bold text-gray-800">
                    {user.displayName || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="mt-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-base px-4 py-2 rounded-md hover:bg-teal-700 transition duration-300"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="btn bg-gradient-to-r from-blue-600 to-teal-500 text-white font-bold text-base"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="btn bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold text-base"
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
