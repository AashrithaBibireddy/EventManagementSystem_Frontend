import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkFlow = ({ eventId }) => {
  const [workFlow, setWorkFlow] = useState([]);

  useEffect(() => {
    const fetchWorkFlow = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/work/get-work/${eventId}`
        );
        setWorkFlow(response.data);
      } catch (error) {
        console.error("Error fetching work flow:", error);
      }
    };

    fetchWorkFlow();
  }, [eventId]);

  const handleCheckboxChange = (workId) => {
    // Update the state to reflect the checkbox change
    setWorkFlow((prevWorkFlow) =>
      prevWorkFlow.map((work) =>
        work._id === workId ? { ...work, checked: !work.checked } : work
      )
    );
  };

  const saveStatusChanges = async () => {
    try {
      // Extract the checked status and _id for each work item
      const statusChanges = workFlow.map(({ _id, checked }) => ({
        _id,
        checked,
      }));

      // Send the status changes to the server
      await axios.post(
        `http://localhost:8000/api/v1/work/save-status-changes`,
        { statusChanges }
      );
      alert("success");
      // Optionally, you can perform additional actions after saving
      console.log("Status changes saved successfully");
    } catch (error) {
      console.error("Error saving status changes:", error);
    }
  };

  return (
    <div className="work-flow">
      <h3>Work Flow for Event ID: {eventId}</h3>
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="px-4 py-2">Work</th>
            <th className="px-4 py-2">Volunteer</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {workFlow.map((work) => (
            <tr key={work._id} className="hover:bg-gray-100">
              <td className="border px-1 py-2 text-gray-900">{work.work}</td>
              <td className="border px-1 py-2 text-gray-900">
                {work.volunteer}
              </td>
              <td className="border px-1 py-2 text-gray-900">
                <input
                  type="checkbox"
                  checked={work.checked || false}
                  onChange={() => handleCheckboxChange(work._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={saveStatusChanges}>Save Status Changes</button>
    </div>
  );
};

export default WorkFlow;
