import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import {
  Box,
  Typography,
  TextField,
  Button,
  TextareaAutosize,
} from "@mui/material";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    department: "",
    dropUsALine: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Box className="flex justify-center mt-5">
      <Box className="max-w-md w-full p-4 shadow-md bg-white text-black">
        <Typography variant="h5" className="mb-2">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit} className="mb-1">
          <TextField
            id="Name"
            label="Name"
            type="text"
            variant="standard"
            value={formData.Name}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            placeholder="Enter Your Name"
          />

          <TextField
            id="email"
            label="Email"
            type="text"
            variant="standard"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            placeholder="Enter your email"
          />

          <TextField
            id="department"
            label="Department"
            type="text"
            variant="standard"
            value={formData.department}
            onChange={handleChange}
            className="mt-1 mb-3 w-full"
            placeholder="Enter your department"
          />

          <Typography variant="subtitle1" className="mb-2">
            Drop us a line
          </Typography>
          <TextareaAutosize
            id="dropUsALine"
            name="dropUsALine"
            value={formData.dropUsALine}
            onChange={handleChange}
            className="mt-1 p-2 w-full rounded-md bg-base-100"
            placeholder="Type here"
            minRows={3}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-3"
          >
            <FaLocationArrow className="mr-1" />
            Send
          </Button>
          <br/>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUs;
