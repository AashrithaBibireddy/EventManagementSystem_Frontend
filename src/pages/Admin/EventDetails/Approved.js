import React, { useEffect, useState } from "react";
import axios from "axios";

const Approved = () => {
  const [approvedData, setApprovedData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/events/get-approved-events"
        );
        console.log("Response Data:", response.data);
        setApprovedData(response.data);
      } catch (error) {
        console.error("Error fetching approved data:", error.message);
        console.error("Error Response:", error.response);

        // Set the error state for more detailed error handling
        setError(error.message || "An error occurred");
      } finally {
        // Set loading to false, regardless of success or failure
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="flex flex-col items-center pt-10">
      {approvedData.map((event) => (
        <div className="card w-4/5 ml-40 bg-white shadow-xl mb-10" key={event._id}>
          <div className="card-body">
            <h2 className="card-title">{event.name}</h2>
            <p>{event.description}</p>
          </div>
          
        </div>
      ))}
    </div>
  );
};

export default Approved;
