import React from "react";
import { TiPlus } from "react-icons/ti";
import Layout from "../../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import { MdEvent } from "react-icons/md";
import { FaCalendarPlus } from "react-icons/fa";
const Event = () => {
  const navigate = useNavigate();
  const handleLogo = () => {
    navigate("/dashboard/volunteer");
  };
  const handleButton = () => {
    navigate("/dashboard/volunteer/events/add-event");
  };

  return (
    <>
      <div className="p-4">
        <div className="flex flex justify-between mt-5">
          <div className="flex items-center mt-4 ml-4">
            <MdEvent className="text-4xl mr-2" onClick={handleLogo} />
            <h1 className="text-4xl text-center font-semibold">
            Events
            </h1>
          </div>
          <div className="flex">
            <div className="group relative">
              <button
                onClick={handleButton}
                className="mr-10 text-black p-5 hover:text-base-300 hover:bg-white text-black transform hover:scale-110 transition-transform bg-base-300 text-white rounded-full"
              >
                <TiPlus />
              </button>
              <div className="hidden group-hover:block absolute bg-gray-800 text-white p-2 rounded-md mt-2">
                Add event
              </div>
            </div>
          </div>
        </div>
        <Card />
      </div>
    </>
  );
};

export default Event;
