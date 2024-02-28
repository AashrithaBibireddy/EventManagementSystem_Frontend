import React, { useEffect, useState } from "react";
import axios from "axios";
const Pending = () => {
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
    try {
      console.log("Decline Event ID:", eventId);
      // Make a DELETE request to remove the event from the database
      await axios.delete(
        `http://localhost:8000/api/v1/events/delete-event/${eventId}`
      );
      alert("Success");
      // Refresh the card data after deletion
      const updatedCardData = cardData.filter((event) => event._id !== eventId);
      setCardData(updatedCardData);
    } catch (error) {
      console.error("Error deleting event:", error.message);
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
    <div className="flex justify-end items-center ml-10 ">
      {cardData ? (
        <div className="w-full min-h-screen">
          {cardData.map((event) => (
            <div
              className="card w-4/5 ml-40 bg-white shadow-xl mb-10"
              key={event._id}
            >
              <div className="card-body">
                <h2 className="card-title">{event.name}</h2>
                <p>{event.description}</p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="bg-base-100 text-black p-2 rounded-md hover:text-base-300 hover:bg-white text-black transform hover:scale-110 transition-transform m-5"
                  onClick={() => handleAcceptSubmit(event._id)}
                >
                  Accept
                </button>

                <button
                  className="bg-base-100 text-black  p-2 rounded-md hover:text-base-300 hover:bg-white text-black transform hover:scale-110 transition-transform"
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

export default Pending;
