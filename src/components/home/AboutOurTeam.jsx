import React from "react";
import TeamCarousel from "./TeamCarousel";

const AboutOurTeam = () => {
  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="team" className="w-full bg-[#d9d9d9] grid justify-center">
      <div className="max-w-[1440px] w-full bg-white">
        <div className="h-64 px-8 py-24 bg-white flex justify-center items-center">
          <h1 className="text-[56px] text-black/90 font-['Raleway'] uppercase leading-[64px]">
            Nuestro equipo
          </h1>
        </div>
        <TeamCarousel />
        <div className="h-[408px] bg-white px-8 py-24 border-t border-black/10 flex items-center gap-4">
          <div className="flex-1 pr-32">
            <p className="text-[#666666] text-[28px] font-['Raleway'] leading-9">
              “Abitacolo cuenta con un equipo de profesionales dedicados a hacer
              de tu experiencia algo extraordinario. Cada miembro del equipo
              está comprometido con tu satisfacción. ¿Listo para comenzar tu
              viaje con Abitacolo? Contáctanos hoy mismo.”
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <div className="text-black text-[40px] font-['Raleway']">
              Expertos a tu servicio
            </div>
            <button
              onClick={scrollToContact}
              className="h-14 px-6 py-4 bg-[#919e32] rounded-sm text-white text-base font-['Sarala'] uppercase"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurTeam;
