import React from "react";
import NavbarUser from "./NavbarUser";
import CarousalUser from "./CarousalUser";
import MembershipCard from "./MembershipCard";
import VolunteerInfoCard from "./VolunteerInfoCard";
import Testimonials from "./Testinomials";
import Footer from "./FooterUser";
import ContactUs from "./ContactUs";
import { Routes, Route } from "react-router-dom";
import EventUser from "./EventUser";
import Team from "./Team";
import MembershipForm from "./Forms/MembershipForm";

const HomeUser = () => {
  return (
    <div>
      <NavbarUser />
      <CarousalUser />
      
      <div className="text-5xl p-7 pl-9 ml-10 font-semibold">Vision</div>
      <div className="pt-2 pl-20 pr-20 tracking-wider leading-relaxed text-m justify-content text-justify">
        ACM is an international student chapter that brings together technology
        geeks, computer educators, working professionals, among others and gives
        them a platform to share all things related to the world of rapidly
        evolving technology. ACM has always been at the forefront of raising
        awareness about new technologies, educating people and empowering them
        to do something new. Apart from being a technological learning and skill
        sharing platform, ACM is also renowned for developing in its members a
        sense of teamwork and dedication. It empowers individuals to scale new
        heights in their professional careers. With more than 100,000 members
        worldwide, the fraternity only continues to grow stronger in every
        passing year. A chapter with such illustrious history, finds its place
        with a great prominence in VNRVJIET. The team running the chapter
        constantly strives to bring about awareness and widen the reach of
        technology and its wonders to more and more people.
      </div>
      <div className="flex justify-center items-center mt-20">
        <MembershipCard />
        <VolunteerInfoCard />
      </div>
      <Testimonials />
      <ContactUs />
      <div className="mb-20"></div>
      <Footer />
    </div>
  );
};

export default HomeUser;
