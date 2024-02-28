import React, { useState } from "react";
import Work from "./Work";
import CodingContest from "./Forms/CodingContest";
import { IoMdMenu } from "react-icons/io";
import Hackathon from "./Forms/Hackathon";
import Seminar from "./Forms/Seminar";
import TalkSession from "./Forms/TalkSession";
import Workshop from "./Forms/Workshop";
import { Link, useNavigate } from "react-router-dom";
import { FaCalendarPlus } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
const AddEvent = () => {
  const [activeButton, setActiveButton] = useState(null);
const navigate=useNavigate();
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
  };
  const handleLogo=()=>{
    navigate("/dashboard/volunteer")
  }

  return (
    <div>
      <div className="flex items-center mt-4 ml-4" >
        <MdEvent className="text-4xl mr-2" onClick={handleLogo} />
        <h1 className="text-4xl text-center font-semibold">
          Add a New Event !!
        </h1>
      </div>

    
      <div className="p-4">
        <div className="flex justify-between">
          {/* Button 1 */}
          <button
            onClick={() => handleButtonClick(1)}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-black text-black py-2 px-2 rounded transform hover:scale-110 transition-transform"
            style={{ backgroundColor: "#023e4d", color: "white" }}
          >
            Coding Contest
          </button>

          {/* Button 2 */}
          <button
            onClick={() => handleButtonClick(2)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-black text-black py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Hackathon
          </button>

          {/* Button 3 */}
          <button
            onClick={() => handleButtonClick(3)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-black text-black py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Workshop
          </button>

          {/* Button 4 */}
          <button
            onClick={() => handleButtonClick(4)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-black text-black py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Seminar
          </button>

          {/* Button 5 */}
          <button
            onClick={() => handleButtonClick(5)}
            style={{ backgroundColor: "#023e4d", color: "white" }}
            className="pt-3 pb-3 text-xl mx-2 flex-grow bg-base-300 hover:bg-white hover:text-black text-black py-2 px-2 rounded transform hover:scale-110 transition-transform"
          >
            Talk Session
          </button>
        </div>
      </div>

      {activeButton === 1 && (
        <div className="flex h-screen">
          {/* Left Component (30%) */}
          <div className="flex-none bg-base-100 p-4" style={{ width: "40%" }}>
            {/* Your left component goes here */}
            <div className="mb-4">
              <CodingContest />
            </div>
          </div>

          {/* Right Component (70%) */}
          <div className="flex-1 bg-base-100 p-4 flex mt-20 justify-center">
            {/* Your right component goes here */}
            <div>
              <Work />
            </div>
          </div>
        </div>
      )}

      {activeButton === 2 && (
        <div className="flex h-screen">
          {/* Left Component (30%) */}
          <div className="flex-none bg-base-100 p-4" style={{ width: "40%" }}>
            {/* Your left component goes here */}
            <div className="mb-4">
              <Hackathon />
            </div>
          </div>

          {/* Right Component (70%) */}
          <div className="flex-1 bg-base-100 p-4 flex mt-20 justify-center">
            {/* Your right component goes here */}
            <div>
              <Work />
            </div>
          </div>
        </div>
      )}

      {activeButton === 3 && (
        <div className="flex h-screen">
          {/* Left Component (30%) */}
          <div className="flex-none bg-base-100 p-4" style={{ width: "40%" }}>
            {/* Your left component goes here */}
            <div className="mb-4">
              <Workshop />
            </div>
          </div>

          {/* Right Component (70%) */}
          <div className="flex-1 bg-base-100 p-4 flex mt-20 justify-center">
            {/* Your right component goes here */}
            <div>
              <Work />
            </div>
          </div>
        </div>
      )}

      {activeButton === 4 && (
        <div className="flex h-screen">
          {/* Left Component (30%) */}
          <div className="flex-none bg-base-100 p-4" style={{ width: "40%" }}>
            {/* Your left component goes here */}
            <div className="mb-4">
              <Seminar />
            </div>
          </div>

          {/* Right Component (70%) */}
          <div className="flex-1 bg-base-100 p-4 flex mt-20 justify-center">
            {/* Your right component goes here */}
            <div>
              <Work />
            </div>
          </div>
        </div>
      )}

      {activeButton === 5 && (
        <div className="flex h-screen">
          {/* Left Component (30%) */}
          <div className="flex-none bg-base-100 p-4" style={{ width: "40%" }}>
            {/* Your left component goes here */}
            <div className="mb-4">
              <TalkSession />
            </div>
          </div>

          {/* Right Component (70%) */}
          <div className="flex-1 bg-base-100 p-4 flex mt-20 justify-center">
            {/* Your right component goes here */}
            <div>
              <Work />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEvent;
