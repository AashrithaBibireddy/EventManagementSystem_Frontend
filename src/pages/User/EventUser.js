import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "@mui/material";

const EventUser = () => {
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/events/get-approved-events"
        );
        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const handleRegisterNow = () => {
    // Open the membership form in a new tab
    window.open("/dashboard/user/event-form", "_blank");
  };

  return (
    <div className="flex justify-center items-center pt-12">
      {cardData ? (
        <div>
          {cardData.map((event) => (
            <div
              className="card w-full bg-white shadow-xl mb-10"
              key={event.id}
            >
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
                <div className="flex justify-center items-center">
                  <div className="card-actions justify-end m-4">
                    <button
                      onClick={handleRegisterNow}
                      className="flex bg-base-100 text-black p-2 rounded-md hover:text-base-300 hover:bg-white transform hover:scale-110 transition-transform"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventUser;
