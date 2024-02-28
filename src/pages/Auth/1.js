import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Typography } from "@mui/material";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { auth, setAuth } = useAuth();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    try {
      const res = await axios.post("http://localhost:8000/api/v1/auth/login", {
        username,
        password,
      });

      if (res.data.success) {
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));

        if (res.data.user.role === "1") {
          navigate("/dashboard/admin");
        } else {
          navigate("/dashboard/volunteer");
        }
      } else {
        console.log("login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <Box>
      <Card sx={{ maxWidth: 320, margin: "auto", marginTop: 18 }}>
        <CardContent>
          <Box
            component="form"
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
              Login Page
            </Typography>

            <TextField
              id="standard-user-input"
              label="Username"
              type="text"
              variant="standard"
              value={username}
              onChange={handleUsernameChange}
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              variant="standard"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{ marginTop: 2 }}
            >
              Login
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}