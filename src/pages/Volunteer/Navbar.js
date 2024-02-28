import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Styles.css";
import { useAuth } from "../../context/auth";

const Navbar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Call the logout function
    logout();
    navigate("/");
    // Additional logic (e.g., redirect to login page)
  };

  return (
    <div>
      <div className="navbar" style={{ backgroundColor: "#023e4d", color: "white" }}>
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost text-xl">
          <img src="/images/acmlogo.png" alt="not found" className="acmimage" />
            <span>ACM VNRVJIET</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="list">
              <Link to="/dashboard/volunteer/events">Events</Link>
            </li>
            <li className="list">
              <Link to="/dashboard/volunteer/letters">Letters</Link>
            </li>
            <li className="list">
              <Link to="/" onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
