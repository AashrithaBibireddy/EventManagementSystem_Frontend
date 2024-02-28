import React from "react";
import AddEvent from "./Events/AddEvent";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Event from "./Events/Event";
import { Routes, Route } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import VolunteerMenu from "./VolunteerMenu";
import GetPermissions from "./Permissions/GetPermissions";
import CarousalUser from "../User/CarousalUser";
const VolunteerDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<VolunteerMenu />} />
        <Route path="/events" element={<Event />} />
        <Route path="/letters" element={<GetPermissions />} />
        <Route path="/events/add-event" element={<AddEvent />} />
      </Routes>
    </>
  );
};

export default VolunteerDashboard;
