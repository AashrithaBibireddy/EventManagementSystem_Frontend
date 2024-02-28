import React, { useEffect, useState } from "react";
import axios from "axios";

const EventDet = () => {
  const [cardData, setCardData] = useState(null);

  const handleAcceptSubmit = async (eventId) => {
    try {
      console.log("Accepted Event ID:", eventId);
      await axios.put(
        `http://localhost:8000/api/v1/events/update-event/${eventId}`,
        {
          approved: 1,
        }
      );
      alert("Success");
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  const handleDeclineSubmit = async (eventId) => {
    // Implement decline logic if needed
    try {
      console.log("Decline Event ID:", eventId);
      await axios.put(
        `http://localhost:8000/api/v1/events/update-event/${eventId}`,
        {
          approved: 0,
        }
      );
      alert("Success");
    } catch (error) {
      console.error("Error updating data:", error.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/events/get-all-events"
        );

        setCardData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen pt-64 m-10">
      {cardData ? (
        <div>
          {cardData.map((event) => (
            <div
              className="card w-96 bg-black shadow-xl mb-10 flex flex-col justify-between"
              key={event._id}
            >
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-base-100 text-white p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform m-5"
                  onClick={() => handleAcceptSubmit(event._id)}
                >
                  Accept
                </button>

                <button
                  className="bg-base-100 text-white p-2 rounded-md hover:text-base-300 hover:bg-white text-white transform hover:scale-110 transition-transform"
                  onClick={() => handleDeclineSubmit(event._id)}
                >
                  Decline
                </button>
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

export default EventDet;
