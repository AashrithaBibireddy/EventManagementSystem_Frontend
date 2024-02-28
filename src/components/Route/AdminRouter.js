// AdminRoute.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import axios from "axios";
import AdminDashboard from "../../pages/Admin/AdminDashboard";

const AdminRoute = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdminAuth = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/auth/admin-auth"
        );

        if (response.data.ok) {
          setLoading(false);
          console.log("Admin auth response:", response.data);
        } else {
          navigate("/login"); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error("Admin auth check error:", error);
        navigate("/login"); // Redirect to login on error
      }
    };

    checkAdminAuth();
  }, [navigate]);

  return loading ? <Spinner /> : <AdminDashboard />;
};

export default AdminRoute;
