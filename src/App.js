import React from "react";
import "./styles/Styles.css";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Auth/Login";
import { Routes, Route } from "react-router-dom";
import PR from "./pages/Volunteer/Permissions/PR";
import Attendance from "./pages/Volunteer/Permissions/Attendance";
import EventPermission from "./pages/Volunteer/Permissions/EventPermission";
import AddEvent from "./pages/Volunteer/Events/AddEvent";
import VolunteerRoute from "./components/Route/VolunteerRoute";
import MembershipForm from "./pages/User/Forms/MembershipForm";
import CoreList from "./pages/Admin/Members/CoreList";
import AdminRoute from "./components/Route/AdminRouter";
import VolunteerList from "./pages/Admin/Members/VolunteerList";
import Event from "./pages/Volunteer/Events/Event";
import EventDet from "./pages/Admin/EventDetails/EventDet";
import Pending from "./pages/Admin/EventDetails/Pending";
import Approved from "./pages/Admin/EventDetails/Approved";
import HomeUser from "./pages/User/HomeUser";
import EventUser from "./pages/User/EventUser";
import Team from "./pages/User/Team";
import EventForm from "./pages/User/Forms/EventForm";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/volunteer/*" element={<VolunteerRoute />} />

        <Route path="/dashboard/admin/*" element={<AdminRoute />} />

        <Route path="/event-details" element={<EventDet />} />
        <Route path="/" element={<LandingPage />} />

        <Route path="dashboard/user/events" element={<EventUser />} />
        <Route path="dashboard/user/team" element={<Team />} />
        <Route path="dashboard/user/membership" element={<MembershipForm />} />
        <Route path="dashboard/user/event-form" element={<EventForm />} />
        <Route path="dashboard/user" element={<HomeUser />} />
      </Routes>
    </div>
  );
};

export default App;
