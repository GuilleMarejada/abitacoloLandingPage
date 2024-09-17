import React from "react";
import Banner from "../components/home/Banner";
import AboutUs from "../components/home/AboutUs";
import AboutOurJob from "../components/home/AboutOurJob";
import AboutOurTeam from "../components/home/AboutOurTeam";
import Hitos from "../components/home/Hitos";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs />
      <AboutOurJob />
      <AboutOurTeam />
      <Hitos />
    </div>
  );
};

export default Home;
