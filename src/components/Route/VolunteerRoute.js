import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";
import VolunteerDashboard from "../../pages/Volunteer/VolunteerDashboard";

const VolunteerRoute = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkVolAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/volunteer-auth"
        );

        if (response.data.ok) {
          setLoading(false);
          console.log("Volunteer auth response:", response.data);
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Volunteer auth check error:", error);
        navigate("/login"); // Redirect to login on error
      }
    };

    checkVolAuth();
  }, [navigate]);

  return loading ? <Spinner /> : <VolunteerDashboard />;
};

export default VolunteerRoute;