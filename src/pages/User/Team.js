import React from "react";
import NavbarUser from "./NavbarUser";
import VolunteerList from "../Admin/Members/VolunteerList";
import CoreList from "../Admin/Members/CoreList";
import Footer from "./FooterUser";

const Team = () => {
  return (
    <div>
      <NavbarUser />
      <VolunteerList />
      <CoreList />
      <Footer />
    </div>
  );
};

export default Team;
