import React, { useState } from "react";

const Hitos = () => {
  const [activeTitle, setActiveTitle] = useState(1);
  const [activeImage, setActiveImage] = useState(
    "https://via.placeholder.com/1440x400"
  );

  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    contacto?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHover = (title, imageUrl) => {
    setActiveTitle(title);
    setActiveImage(imageUrl);
  };

  return (
    <div className="w-full py-32 grid justify-center bg-[#333333]">
      <div
        id="hitos"
        className="bg-[#919e32] grid justify-center max-w-[1376px] w-full rounded-lg"
      >
        <div className="h-[350px] px-8 py-24 flex justify-center items-center">
          <div className="grid justify-center">
            <h1 className="w-[528px] justify-self-center text-white/90 text-[56px] font-semibold uppercase leading-[64px]">
              hitos abitacolo
            </h1>
            <p className="w-[956px] text-white/90 text-2xl uppercase leading-[42px]">
              Únete a nosotros en esta emocionante etapa de crecimiento y forma
              parte de nuestra historia.
            </p>
          </div>
        </div>

        <img src={activeImage} alt="hero" />

        <div className="relative flex justify-start items-start">
          <div className="self-stretch px-8 pb-24 bg-black/5 flex gap-4">
            <div
              onMouseEnter={() =>
                handleHover(
                  1,
                  "https://via.placeholder.com/1440x400?text=Imagen+01"
                )
              }
              className={`relative grow shrink p-12 flex-col gap-6 inline-flex ${
                activeTitle === 1
                  ? "bg-[#202023] text-white top-[-20px]"
                  : "bg-[#333333] text-white/60 top-[-20px]"
              }`}
            >
              <div className="text-2xl font-bold uppercase">Titulo 01</div>
              <div className="text-sm uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
              </div>
            </div>

            <div
              onMouseEnter={() =>
                handleHover(
                  2,
                  "https://via.placeholder.com/1440x400?text=Imagen+02"
                )
              }
              className={`relative grow shrink p-12 flex-col gap-6 inline-flex ${
                activeTitle === 2
                  ? "bg-[#202023] text-white top-[-20px]"
                  : "bg-[#333333] text-white/60 top-[-20px]"
              }`}
            >
              <div className="text-2xl font-bold uppercase">Titulo 02</div>
              <div className="text-sm uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
              </div>
            </div>

            <div
              onMouseEnter={() =>
                handleHover(
                  3,
                  "https://via.placeholder.com/1440x400?text=Imagen+03"
                )
              }
              className={`relative grow shrink p-12 flex-col gap-6 inline-flex ${
                activeTitle === 3
                  ? "bg-[#202023] text-white top-[-20px]"
                  : "bg-[#333333] text-white/60 top-[-20px]"
              }`}
            >
              <div className="text-2xl font-bold uppercase">Titulo 03</div>
              <div className="text-sm uppercase">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 px-8 py-4 border-b border-white/10 flex justify-between items-center">
          <div className="opacity-0 flex items-center gap-4">
            <div className="text-white text-2xl font-normal uppercase">
              Lee toda nuestra historia
            </div>
          </div>
          <button className="px-4 py-3 bg-black/30 rounded-sm border border-white/10 backdrop-blur-xl text-white/90 uppercase">
            Ver todos
          </button>
        </div>

        <div className="h-[408px] px-8 py-24 border-t border-black/10 flex items-center gap-4">
          <div className="flex-1 pr-32">
            <p className="text-white/60 text-[28px] leading-9">
              En Abitacolo cada día damos pasos firmes hacia el éxito, estamos
              buscando inversores visionarios que quieran ser parte de nuestra
              emocionante trayectoria. Únete a nosotros y sé parte de una
              historia de innovación y crecimiento imparable.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <div className="text-white/90 text-[40px]">
              ¡Empieza tu historia con nosotros!
            </div>
            <button
              onClick={scrollToContact}
              className="h-14 px-6 py-4 bg-[#333333] rounded-sm text-white uppercase tracking-tight"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hitos;
