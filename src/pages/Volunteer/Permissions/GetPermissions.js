import React, { useState } from "react";
import PR from "./PR";
import Attendance from "./Attendance";
import EventPermission from "./EventPermission";
import { FaCalendarPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoIosMail } from "react-icons/io";

const GetPermissions = () => {
  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };

  const handleLogo = () => {
    navigate("/dashboard/volunteer");
  };

  return (
    <div>
      <div className="flex items-center mt-4 ml-4">
        <IoIosMail
          className="text-4xl mr-2"
          onClick={handleLogo}
        />
        <h1 className="text-4xl text-center font-semibold">
          Permission Letters
        </h1>
      </div>

      <div className="p-4">
        <div className="flex justify-between">
          {/* Button 1 */}
          <button
            onClick={() => handleButtonClick(1)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-base-300 text-white py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Attendance
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleButtonClick(2)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-base-300 text-white py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Public Relations
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleButtonClick(3)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-base-300 text-white py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Event Permission
          </button>
        </div>
      </div>

      {activeButton === 1 && <Attendance />}
      {activeButton === 2 && <PR />}
      {activeButton === 3 && <EventPermission />}
    </div>
  );
};

export default GetPermissions;
