import React, { useState } from "react";

const Hitos = () => {
  const [activeTitle, setActiveTitle] = useState(1);
  const [activeImage, setActiveImage] = useState(
    "https://via.placeholder.com/1440x400"
  );

  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHover = (title, imageUrl) => {
    setActiveTitle(title);
    setActiveImage(imageUrl);
  };

  return (
    <div className="w-full py-16 grid justify-center bg-[#333333] px-4">
      <div
        id="hitos"
        className="bg-[#919e32] grid justify-center max-w-[1376px] rounded-lg"
      >
        <div className="h-[350px] px-8 py-24 flex justify-center items-center">
          <div className="grid justify-center">
            <h1 className="max-w-[528px] justify-self-center text-white/90 text-[56px] font-semibold uppercase leading-[64px]">
              hitos abitacolo
            </h1>
            <p className="max-w-[956px] text-white/90 text-2xl uppercase leading-[42px]">
              Únete a nosotros en esta emocionante etapa de crecimiento y forma
              parte de nuestra historia.
            </p>
          </div>
        </div>

        <img
          className="w-full max-w-[1376px] h-[400px] object-cover"
          src={activeImage}
          alt="hero"
        />

        <div className="relative flex justify-center">
          <div className="px-8 pb-24 bg-black/5 flex gap-4">
            {[1, 2, 3].map((title) => (
              <div
                key={title}
                onMouseEnter={() =>
                  handleHover(
                    title,
                    `https://via.placeholder.com/1440x400?text=Imagen+0${title}`
                  )
                }
                className={`relative grow p-12 flex-col gap-6 inline-flex ${
                  activeTitle === title
                    ? "bg-[#202023] text-white"
                    : "bg-[#333333] text-white/60"
                } top-[-20px] ${
                  title === 2
                    ? "max-md:hidden"
                    : title === 3
                    ? "max-lg:hidden"
                    : ""
                }`}
              >
                <div className="text-2xl font-bold uppercase">
                  Titulo 0{title}
                </div>
                <div className="text-sm uppercase">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque ut est at felis sodales tempus.
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-20 flex lg:justify-end px-8 py-4 border-b border-white/10">
          <button className="px-4 py-3 bg-black/30 rounded-sm border max-lg:justify-self-start-start border-white/10 backdrop-blur-xl text-white/90 uppercase">
            Ver todos
          </button>
        </div>

        <div className="min-h-[408px] px-8 py-24 border-t border-black/10 flex max-lg:flex-col-reverse items-center gap-4">
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
              className="h-14 px-6 py-4 bg-[#333333] rounded-sm text-white uppercase"
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
