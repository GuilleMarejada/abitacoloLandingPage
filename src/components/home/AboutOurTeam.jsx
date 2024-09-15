import React from "react";
import TeamCarousel from "./TeamCarousel";

const AboutOurTeam = () => {
  return (
    <div className="w-full bg-white grid justify-center">
      <div className="h-64 px-8 py-24 justify-center items-center gap-2.5 inline-flex">
        <div className="w-[492px] text-black/90 text-[56px] font-normal font-['Raleway'] uppercase leading-[64px]">
          Nuestro equipo
        </div>
      </div>
      <TeamCarousel />
    </div>
  );
};

export default AboutOurTeam;
