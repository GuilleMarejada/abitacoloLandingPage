import React from "react";

const AboutUs = () => {
  const scrollToContact = () => {
    window.scrollTo({
      top: 1500,
      behavior: "smooth",
    });
  };
  return (
    <div className="w-full bg-white grid justify-center">
      <div className="h-[688px] w-[1440px] px-8 py-32 flex gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="w-[680px] text-black text-5xl font-normal font-['Raleway'] uppercase leading-[56px]">
            ¿Qué es abitacolo?
          </h2>
        </div>
        <div className="flex flex-col gap-12 grow">
          <div className="text-black/60 text-[32px] font-light font-['Raleway'] leading-[41.60px]">
            <p>
              En Abitacolo, creemos que cada mueble tiene una historia
              fascinante que merece ser continuada.{" "}
              <strong className="font-semibold">
                Rescatamos piezas olvidadas, las restauramos con pasión y las
                presentamos en nuestra plataforma.
              </strong>{" "}
              Somos cazadores de tesoros, artesanos y narradores de historias.{" "}
              <strong className="font-semibold">
                ¿Quieres ser parte de la próxima historia de un mueble
                extraordinario?
              </strong>
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={scrollToContact}
              className="px-6 py-4 bg-[#919e32] rounded-sm backdrop-blur-xl text-white text-base font-normal font-['Raleway'] uppercase"
            >
              ¡Cuéntanos tu idea!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
