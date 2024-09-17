import React from "react";

const Nav = () => {
  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutOurTeam = () => {
    const contacto = document.getElementById("team");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAboutUs = () => {
    const AboutUs = document.getElementById("AboutUs");
    if (AboutUs) {
      AboutUs.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full absolute flex justify-center">
      <div className="max-w-[1440px] w-full h-[65px] px-8 py-4 flex justify-between">
        <div className="justify-start items-start gap-1 flex ">
          <img
            className="w-[108px] h-[33px] mx-[31px]"
            src="https://via.placeholder.com/108x33"
          />
          <button
            onClick={scrollToAboutUs}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm justify-start items-start gap-1 flex max-lg:hidden"
          >
            <div className="text-white text-sm font-normal  uppercase leading-tight tracking-tight ">
              ¿Que es abitacolo?
            </div>
          </button>
          <button
            onClick={scrollToAboutOurTeam}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm justify-start items-start gap-1 flex max-lg:hidden"
          >
            <div className="text-white text-sm font-normal  uppercase leading-tight tracking-tight">
              Nuestro equipo
            </div>
          </button>
          <div className="px-2 py-1.5 bg-[#2e2f32] rounded-sm justify-start items-start gap-1 flex max-lg:hidden">
            <div className="text-white text-sm font-normal  uppercase leading-tight tracking-tight">
              Hitos abitacolo
            </div>
          </div>
          <div className="px-2 py-1.5 bg-[#2e2f32] rounded-sm justify-start items-start gap-1 flex max-lg:hidden">
            <div className="text-white text-sm font-normal  uppercase leading-tight tracking-tight">
              Nuestros productos
            </div>
          </div>
        </div>
        <div className="gap-2 flex max-lg:hidden">
          <div className="px-2 py-1.5 bg-white/90 rounded-sm backdrop-blur-sm justify-start items-start gap-1 flex">
            <div className="text-black/90 text-sm font-normal  uppercase leading-tight tracking-tight">
              ES
            </div>
            <div className="w-5 h-5 relative">
              <div className="w-3.5 h-3.5 left-[3px] top-[3px] absolute">
                <div className="w-3.5 h-3.5 left-0 top-0 absolute rounded-full border-2 border-black/90" />
              </div>
            </div>
          </div>
          <div className="px-2 py-1.5 bg-[#919e32] rounded-sm justify-start items-start gap-1 flex">
            <button
              onClick={scrollToContact}
              className="text-white text-sm font-normal  uppercase leading-tight tracking-tight"
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
