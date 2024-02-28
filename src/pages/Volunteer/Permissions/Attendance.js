import React, { useState } from "react";
import jsPDF from "jspdf";
import {
  Box,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
const Attendance = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    eventType: "",
    eventDate: "",
    eventVenue: "",
    eventTime: "",
    eventTargetStudents: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [year1, month1, day1] = formData.eventDate.split("-");

    // Format the date as "dd-mm-yyyy"
    const format = `${day1}-${month1}-${year1}`;
    const currentDate = new Date();

    // Get day, month, and year components
    const day = currentDate.getDate().toString().padStart(2, "0");
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const year = currentDate.getFullYear();

    // Format the date as "dd-mm-yyyy"
    const formattedDate = `${day}-${month}-${year}`;

    // Create a new jsPDF instance
    const doc = new jsPDF();

    // Set font size and type
    doc.setFontSize(16);
    doc.setFont("helvetica", "normal");

    // Add image
    doc.addImage("/images/PDFHeader.png", "PNG", 0, 0, 210, 40); // Adjust the coordinates and dimensions

    //line
    doc.setLineWidth(0.25); // Set the line width
    doc.line(5, 40, 205, 40); // Add a horizontal line at y = 40

    doc.setFontSize(12);
    doc.setFont("times", "normal");
    //date at the right corner
    doc.text(170, 45, `Date: ${formattedDate}`);

    // Set font size, type, style, and add underlining
    doc.setFontSize(14);
    doc.setFont("times", "bold");
    doc.setTextColor(0, 0, 0); // Set text color to black
    doc.setLineWidth(0.5); // Set the line width for underlining
    doc.text(90, 50, "OFFICE NOTE");

    // Reset font size and type for the rest of the content
    doc.setFontSize(12);
    doc.setFont("times", "normal");

    doc.text(
      20,
      60,
      `Subject: Seeking permission to promote public relations activities regarding ${formData.eventName} in the college.`
    );
    doc.text(
      20,
      70,
      `ACM Student Chapter of VNRVJIET, in association with the Department of Information Technology `
    );
    doc.text(
      20,
      80,
      `proposed to conduct ${formData.eventName} for ${formData.eventTargetStudents}. As a part of this event we request you to grant permission`
    );
    doc.text(20, 90, `for conducting PR in college on ${format}.`);

    doc.text(20, 200, `HOD `);
    doc.text(155, 150, `Principal`);
    doc.text(20, 150, `Dean `);
    doc.text(155, 200, `Faculty Coordinator `);
    
    // Save or display the PDF as needed

    doc.save(`${formData.eventName}.pdf`);
  };

  return (
    <Box className=" flex items-center justify-center bg-white">
      <Box className="event-form p-8 rounded shadow-md w-96 bg-white text-black">
        <Typography variant="h5" className="mb-4 text-black">
          Attendance Permission
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            id="eventName"
            label="Name of the Event"
            type="text"
            variant="standard"
            fullWidth
            size="small"
            className="mb-4"
            value={formData.eventName}
            onChange={handleChange}
          />

          <InputLabel
            id="demo-simple-select-standard-label"
            className="text-black"
          >
            Type of the Event
          </InputLabel>
          <Select
            label=" Type of the Event"
            id="demo-simple-select-standard"
            labelId="demo-simple-select-standard-label"
            value={formData.eventType}
            onChange={handleChange}
            fullWidth
            variant="standard"
            sx={{ marginBottom: "8px", "& select": { padding: "3px" } }}
          >
            <MenuItem value="" disabled>
              Select Type
            </MenuItem>
            <MenuItem value="Workshop">Workshop</MenuItem>
            <MenuItem value="Coding Contest">Coding Contest</MenuItem>
            <MenuItem value="Seminar">Seminar</MenuItem>
            <MenuItem value="Talk Session">Talk Session</MenuItem>
            <MenuItem value="Hackathon">Hackathon</MenuItem>
          </Select>

          <TextField
            id="eventDate"
            label=" "
            type="date"
            variant="standard"
            fullWidth
            size="small"
            className="mb-4"
            value={formData.eventDate}
            onChange={handleChange}
          />

          <TextField
            id="eventVenue"
            label="Venue"
            type="text"
            variant="standard"
            fullWidth
            size="small"
            className="mb-4"
            value={formData.eventVenue}
            onChange={handleChange}
          />

          <TextField
            id="eventTime"
            label="Time"
            type="text"
            variant="standard"
            fullWidth
            size="small"
            className="mb-4"
            value={formData.eventTime}
            onChange={handleChange}
          />

          <InputLabel id="eventTargetLabel" className="text-white">
            Target Students
          </InputLabel>
          <Select
            variant="standard"
            labelId="eventTargetLabel"
            id="eventTargetStudents"
            value={formData.eventTargetStudents}
            onChange={handleChange}
            fullWidth
            sx={{ marginBottom: "8px", "& select": { padding: "6px" } }}
          >
            <MenuItem value="" disabled>
              Select Target Students
            </MenuItem>
            <MenuItem value="1st years">1st years</MenuItem>
            <MenuItem value="2nd years">2nd years</MenuItem>
            <MenuItem value="3rd years">2nd years</MenuItem>
            <MenuItem value="4th years">4th years</MenuItem>
          </Select>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            className="mb-4"
          >
            Generate PDF
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Attendance;
