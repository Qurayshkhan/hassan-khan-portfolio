import React from "react";
import Master from "../layouts/Master";
import { Link } from "react-router-dom";
import Header from "../layouts/partials/Header";
import HomeSection from "../components/sections/HomeSection";
import Resume from "../components/sections/Resume";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";
const Home = () => {
  return (
    <Master>
      <Header />
      <HomeSection />
      <Resume />
      <Projects />
      <Contact />
    </Master>
  );
};

export default Home;
