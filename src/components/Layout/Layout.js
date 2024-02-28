import React from "react";
import Navbar from "../../pages/Volunteer/Navbar";
import Footer from "../../pages/Volunteer/Footer";
import CarousalUser from "../../pages/User/CarousalUser";

const Layout = () => {
  return (
    <>
      <Navbar />

      <CarousalUser />
      <Footer />
    </>
  );
};

export default Layout;
