import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const [formData, setFormData] = useState({
    fname: "",
    rollno: "",
    department: "",
    section: "",
    mail: "",
    mobileno: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/acmmembers/create-member",
        formData
      );
      alert("Event data submitted");
      navigate("/dashboard/volunteer/events/add-event");
      setFormData({
        fname: "",
        rollno: "",
        department: "",
        section: "",
        mail: "",
        mobileno: "",
      });
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  return (
    <Box className="flex justify-center mt-10">
      <Box className="max-w-md w-full p-4 shadow-md bg-white text-black">
        <Typography variant="h5" className="mb-2">
          Register Now!
        </Typography>
        <form onSubmit={handleSubmit} className="mb-5">
          <TextField
            label="Name of the Student"
            type="text"
            id="fname"
            name="fname"
            value={formData.fname}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <TextField
            label="Roll number"
            type="text"
            id="rollno"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <TextField
            label="Department"
            type="text"
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <TextField
            label="Section"
            type="text"
            id="section"
            name="section"
            value={formData.section}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <TextField
            label="E-Mail"
            type="text"
            id="mail"
            name="mail"
            value={formData.mail}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <TextField
            label="Mobile Number"
            type="number"
            id="mobileno"
            name="mobileno"
            value={formData.mobileno}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            variant="standard"
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-3"
            style={{marginTop:"13px"}}
          >
            <FaLocationArrow className="mr-1" />
            Register !
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default EventForm;
