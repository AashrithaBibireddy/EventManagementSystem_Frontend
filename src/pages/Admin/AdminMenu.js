import React from "react";
import { Link, Routes, Route, Outlet, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { useAuth } from "../../context/auth";

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleClick=()=>{
    navigate("/dashboard/admin")
  }
  const user = {
    name: "ACM Admin",
    role: "Admin",
    avatar: "/images/acmlogo.png", // Replace with the actual path to the avatar image
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <aside
      style={{ backgroundColor: "#023e4d" }}
      className=" text-white h-screen w-30 flex flex-col fixed left-0"
    >
      <div className="p-4 flex items-center">
        {/* Avatar Section */}
        <div className="w-12 h-12 bg-023e4d rounded-full overflow-hidden mr-2" onClick={handleClick}>
          <img
            src={user.avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg font-semibold">{user.name}</p>
          <p className="text-sm">{user.role}</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center overflow-y-auto">
        {/* Main Navigation Links */}
        <nav className="mb-8 text-center">
          <Link
            to="/dashboard/admin/core-list"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Core Details
          </Link>
          <Link
            to="/dashboard/admin/volunteer-list"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Volunteer Details
          </Link>
          <Link
            to="/dashboard/admin/pending-events"
            className="block py-2 px-4 hover:bg-gray-700 transition duration-300"
          >
            Pending Events
          </Link>
        </nav>

        <div className="mt-4">
          <button
            onClick={handleLogout}
            className="flex bg-023e4d text-white p-2 rounded-md hover:text-023e4d hover: text-white transform hover:scale-110 transition-transform"
          >
            <div className="mt-1">
              <IoIosLogOut />
            </div>{" "}
            <div className="ml-2 pr-1">Logout</div>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
