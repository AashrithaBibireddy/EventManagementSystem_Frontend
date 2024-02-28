import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { Box, Typography, TextField, Button } from "@mui/material";

const Workshop = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    type: "Workshop",
    name: "",
    topic: "",
    venue: "",
    time: "",
    date: "",
    speaker: "",
    description: "",
    year: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/events/create-event",
        formData
      );
      alert("Event data submitted");
      navigate("/dashboard/volunteer/events/add-event");
      setFormData({
        name: "",
        topic: "",
        venue: "",
        time: "",
        date: "",
        speaker: "",
        description: "",
        year: "",
      });
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <Box className="max-w-s p-4 shadow-md bg-white ml-6 mb-6 text-black">
      <Typography variant="h5" className="mb-2">
        Create Workshop
      </Typography>
      <form onSubmit={handleSubmit} className="mb-5">
        <TextField
          id="standard-basic"
          label="Type of the Event"
          value={formData.type}
          variant="standard"
          fullWidth
          size="small"
          className="mb-2"
          style={{ marginTop: "8px" }}
     
        />

        <TextField
          id="standard-basic"
          label="Name of the Workshop"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="standard"
          fullWidth
          size="small"
          placeholder="Type here"
          className="mb-2"
          style={{ marginTop: "8px" }}
        />

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <TextField
            id="standard-basic"
            label="Topic"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            placeholder="Type here"
            className="mb-2"
          />

          <TextField
            id="standard-basic"
            label="Speaker"
            name="speaker"
            value={formData.speaker}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            placeholder="Type here"
            className="mb-2"
          />
        </div>

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <TextField
            id="standard-basic"
            label="Time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            placeholder="Type here"
            className="mb-2"
          />

          <TextField
            id="standard-basic"
            label="Venue"
            name="venue"
            value={formData.venue}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            placeholder="Type here"
            className="mb-2"
          />

          <TextField
            id="standard-basic"
            label=" "
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            className="mb-2"
          />
        </div>

        <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
          <TextField
            id="standard-basic"
            label="Year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            variant="standard"
            fullWidth
            size="small"
            placeholder="Type here"
          />
        </div>

        <TextField
          id="standard-basic"
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          variant="standard"
          fullWidth
          size="small"
          multiline
          rows={2}
          placeholder="Type here"
          className="mb-2"
          style={{ marginTop: "8px" }}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="flex items-center"
          style={{ marginTop: "8px" }}
        >
          <FaLocationArrow className="mr-2" />
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Workshop;
