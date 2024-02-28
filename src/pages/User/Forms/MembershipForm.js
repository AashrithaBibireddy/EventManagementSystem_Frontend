import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import axios from "axios";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
function MembershipForm() {
  const [amount, setamount] = useState("");
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
    // Otherwise, update other form data
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var options = {
      key: "rzp_test_UpiX9NbPDSPRE9",
      key_secret: "xEfrmNVHeJldfK0klLrczorH",
      amount: 40000,
      currency: "INR",
      name: "ACM Membership",
      description: "for testing purpose",
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: ` ${formData.fname}`,
        email: `${formData.email}`,
        contact: `${formData.mobileno}`,
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#0d3e69",
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();

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
    <Box>
      <Card sx={{ maxWidth: 320, margin: "auto", marginTop: 4 }}>
        <CardContent>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              "& .MuiTextField-root": { m: 1, width: "100%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography variant="h5" component="h3">
              ACM Membership
            </Typography>

            <TextField
              id="fname"
              label="Name of the Student"
              name="fname"
              type="text"
              variant="standard"
              value={formData.fname}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />
            <TextField
              id="rollno"
              label="Roll number"
              name="rollno"
              type="text"
              variant="standard"
              value={formData.rollno}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />
            <TextField
              id="department"
              label="Department"
              name="department"
              type="text"
              variant="standard"
              value={formData.department}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />
            <TextField
              id="section"
              label="Section"
              name="section"
              type="text"
              variant="standard"
              value={formData.section}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />
            <TextField
              id="mail"
              label="E-Mail"
              type="text"
              name="mail"
              variant="standard"
              value={formData.mail}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />
            <TextField
              id="mobileno"
              label="Mobile Number"
              name="mobileno"
              type="number"
              variant="standard"
              value={formData.mobileno}
              onChange={handleChange}
              sx={{ marginTop: 1 }}
            />

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: 4 }}
            >
              Register!
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default MembershipForm;
