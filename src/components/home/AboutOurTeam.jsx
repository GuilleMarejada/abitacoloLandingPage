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
    <div
      id="team"
      className="w-full bg-[#0000000A] grid justify-center pb-8 px-4"
    >
      <div className="max-w-[1440px] w-full bg-white rounded-sm">
        <div className="md:h-64 max-md:h-[132px] px-8 py-24 max-md:py-12 bg-white flex justify-center items-center rounded-sm">
          <h1 className="md:text-[56px] max-md:text-[32px] text-black/90 font-['Raleway'] uppercase leading-[64px]">
            Nuestro equipo
          </h1>
        </div>
        <TeamCarousel />
        <div className="min-h-[408px] bg-white px-8 py-24 flex items-center gap-4 rounded-e-sm max-lg:flex-col-reverse">
          <div className="flex-1 pr-32">
            <p className="text-[#666666] text-[28px] font-['Raleway'] leading-9">
              “Abitacolo cuenta con un equipo de profesionales dedicados a hacer
              de tu experiencia algo extraordinario. Cada miembro del equipo
              está comprometido con tu satisfacción. ¿Listo para comenzar tu
              viaje con Abitacolo? Contáctanos hoy mismo.”
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-7 max-lg:mb-4">
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
