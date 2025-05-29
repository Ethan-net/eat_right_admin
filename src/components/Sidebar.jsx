import { useContext } from "react";
import Logo from "../assets/LOGO.png";
import { AuthContext } from "../context/ContextProvider";
import axios from "axios";
import { PrivateRoute } from "./ProtectedRoute";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Sidebar({ overrideVisibility = false }) {
  const { admin, setAdmin } = useContext(AuthContext);
  const handleLogout = async () => {
    try {
      await axios.post(
        "https://eat-right-server.onrender.com/app/logout",
        {},
        { withCredentials: true }
      );
      setAdmin(null);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed", error);
    }
  };
  return (
    <PrivateRoute>
      <div
        className={`${
          overrideVisibility ? "flex" : "hidden md:flex"
        } fixed shadow-sm left-0 top-0 h-full `}
      >
        <aside className="flex flex-col gap-4 items-center bg-white text-gray-700 shadow w-16 h-full">
          {/* <!-- Side Nav Bar--> */}

          <div className="h-16 flex items-center w-full">
            {/* <!-- Logo Section --> */}
            <a className="h-6 w-6 mx-auto" href="#">
              <img className="h-6 w-6 mx-auto" src={Logo} alt="logo" />
            </a>
          </div>

          <ul className="w-full">
            <li className=" w-full py-2 group relative transition duration-700  ease-in-out  hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="/" className="  flex justify-center items-center ">
                  {/* Icon */}
                  <svg
                    className="h-5 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 13h8V3H3v10zM13 21h8v-6h-8v6zM13 3v6h8V3h-8zM3 21h8v-4H3v4z" />
                  </svg>

                  {/* Hover Tooltip */}
                </Link>
                <span className="text-[10px] mx-2">Dashboard</span>
              </div>
            </li>

            <li className="  py-2 group relative transition duration-700  ease-in-out  hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="/add_to_menu">
                  {/* Main Icon */}
                  <svg
                    className="h-5 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Link>
              </div>
              <span className="text-[10px] mx-2">Add Menu</span>
            </li>

            <li className=" py-2 group relative transition duration-700  ease-in-out   hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="#">
                  {/* Order Icon (Clipboard/List) */}
                  <svg
                    className="h-5 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth=""
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6M4 6h16M4 6v14a2 2 0 002 2h12a2 2 0 002-2V6M9 6V4h6v2"
                    />
                  </svg>
                </Link>
              </div>

              <span className="mx-4 text-[10px]">Order</span>
            </li>

            <li className=" py-2 group relative transition duration-700  ease-in-out  hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="/analytics">
                  <svg
                    className="h-5 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11 11V21M6 16V21M16 6V21M21 3V21M3 21h18"
                    />
                  </svg>
                </Link>
              </div>
              <span className="text-[10px] mx-3">Analytics</span>
            </li>

            <li className=" py-2 group relative transition duration-700  ease-in-out  hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="/adverts">
                  <svg
                    className="h-5 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <circle cx="12" cy="12" r="3"></circle>
                    <path
                      d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1
							0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0
							0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2
							2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0
							0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1
							0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0
							0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65
							0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0
							1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0
							1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2
							0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0
							1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0
							2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0
							0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65
							1.65 0 0 0-1.51 1z"
                    ></path>
                  </svg>
                </Link>
              </div>
              <span className="text-[10px] mx-4">Advert</span>
            </li>

            <li className=" py-2 group relative transition duration-700  ease-in-out  hover:bg-gray-100">
              <div
                className=" justify-center flex flex-col items-center  
              cursor-pointer"
              >
                <Link to="/reservations">
                  <svg
                    className="h-5 w-4 text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 7V3m8 4V3m-9 8h10m-9 4h6M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>

                  {/* Tooltip */}
                </Link>
              </div>
              <span className="text-[10px] mx-1">Reservations</span>
            </li>
          </ul>

          <div className="mt-auto h-16 flex items-center w-full">
            {/* <!-- Action Section --> */}
            {/* <FaUserCircle size={20} color="#FFD700" /> */}
            <button
              onClick={handleLogout}
              className="h-16  mx-auto flex text-[10px]  justify-center items-center
				w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none"
            >
              {/* <svg
                className="h-5 w-5 text-red-700"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg> */}
              <FaUserCircle size={20} color="#FFD700" />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </PrivateRoute>
  );
}

export default Sidebar;
