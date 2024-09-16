import React from "react";

const AboutUs = () => {
  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="AboutUs" className="w-full bg-white grid justify-center pb-8">
      <div className="xl:h-[688px] max-w-[1440px] px-8 py-32 xl:flex gap-4">
        <h2 className="text-black text-5xl font-normal font-['Raleway'] uppercase leading-[56px] max-w-[680px] pb-4 w-full">
          ¿Qué es Abitacolo?
        </h2>
        <div className="flex flex-col gap-12 grow">
          <div className="text-black/60 text-[32px] font-light font-['Raleway'] leading-[41.60px] max-w-[980px]">
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
          <div className="flex gap-4 w-fit">
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
