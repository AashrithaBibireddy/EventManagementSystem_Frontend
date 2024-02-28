import React from "react";
import AdminMenu from "./AdminMenu";
import Card from "../Volunteer/Events/Card";
import EventDet from "./EventDetails/EventDet";
import { Route, Routes } from "react-router-dom";
import CoreList from "./Members/CoreList";
import VolunteerList from "./Members/VolunteerList";
import Pending from "./EventDetails/Pending";
import Approved from "./EventDetails/Approved";
const AdminDashboard = () => {
  return (
    <div>
      <AdminMenu />
      <Routes>
        <Route path="/core-list" element={<CoreList />} />
        <Route path="/volunteer-list" element={<VolunteerList />} />
        <Route path="/event-details" element={<EventDet />} />
        <Route path="/pending-events" element={<Pending />} />
        <Route path="/" element={<Approved />} />
      </Routes>
    </div>
  );
};

export default AdminDashboard;
