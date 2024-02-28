import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import axios from "axios";
import { Box, Typography, TextField, Button } from "@mui/material";

const Work = () => {
  const [formData, setFormData] = useState({
    name: "",
    work: "",
    volunteer: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/work/create-work",
        formData
      );
      alert("Work is submitted");
      setFormData({
        name: "",
        work: "",
        volunteer: "",
      });
    } catch (error) {
      console.error("Error saving work:", error);
    }
  };

  return (
    <Box
      className="max-w-sm p-4 shadow-md bg-white ml-6 mb-6 text-black"
      style={{ width: "400px" }}
    >
      <Typography variant="h5" className="mb-2">
        Work Assignment
      </Typography>
      <form onSubmit={handleSubmit} className="mb-5">
        <TextField
          id="standard-basic"
          label="Name of the Event"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="standard"
          fullWidth
          size="small"
          className="mb-2"
          style={{ marginTop: "8px" }}
        />

        <TextField
          id="standard-basic"
          label="Work"
          name="work"
          value={formData.work}
          onChange={handleChange}
          variant="standard"
          fullWidth
          size="small"
          className="mb-2"
          style={{ marginTop: "8px" }}
        />

        <TextField
          id="standard-basic"
          label="Volunteer"
          name="volunteer"
          value={formData.volunteer}
          onChange={handleChange}
          variant="standard"
          fullWidth
          size="small"
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

export default Work;
