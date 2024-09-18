import React from "react";

const Hitos = () => {
  const scrollToContact = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full py-32 grid justify-center bg-[#333333]">
      <div
        id="hitos"
        className="bg-[#919e32] grid justify-center max-w-[1376px] w-full rounded-lg"
      >
        <div className="h-[350px] px-8 py-24 justify-center items-center gap-2.5 inline-flex">
          <div className="flex-col justify-start items-center gap-2.5 inline-flex">
            <div className="w-[528px] text-white/90 text-[56px] font-semibold font-['Raleway'] uppercase leading-[64px]">
              hitos abitacolo
            </div>
            <div className="w-[956px] text-white/90 text-2xl font-normal font-['Raleway'] uppercase leading-[42px]">
              Únete a nosotros en esta emocionante etapa de crecimiento y forma
              parte de nuestra historia.
            </div>
          </div>
        </div>
        <div className=" flex-col justify-start items-start inline-flex">
          <div className="self-stretch px-8 pb-24 bg-black/5 justify-center items-start gap-4 inline-flex">
            <div className="grow shrink basis-0 self-stretch p-12 bg-[#202023] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch text-white/90 text-2xl font-bold font-['Raleway'] uppercase leading-7">
                Titulo 01
              </div>
              <div className="self-stretch text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Pellentesque ut est at
                felis sodales tempus.
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch p-12 bg-[#333333] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch opacity-60 text-white/90 text-2xl font-bold font-['Raleway'] uppercase leading-7">
                Titulo 02
              </div>
              <div className="self-stretch opacity-60 text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
              </div>
            </div>
            <div className="grow shrink basis-0 self-stretch p-12 bg-[#333333] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch opacity-60 text-white/90 text-2xl font-semibold font-['Raleway'] uppercase leading-7">
                Titulo 03
              </div>
              <div className="self-stretch opacity-60 text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque ut est at felis sodales tempus.
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 px-8 py-4 border-b border-white/10 justify-between items-center inline-flex">
          <div className="opacity-0 justify-start items-start gap-4 flex">
            <div className="text-white text-2xl font-normal font-['Azeret Mono'] uppercase leading-7">
              Lee todas nuestra historia
            </div>
          </div>
          <div className="px-4 py-3 bg-black/30 rounded-sm border border-white/10 backdrop-blur-xl justify-center items-center gap-1 flex">
            <div className="text-white/90 text-base font-normal font-['Raleway'] uppercase leading-normal tracking-tight">
              Ver todos
            </div>
            <div className="w-6 h-6 relative" />
          </div>
        </div>
        <div className="h-[408px] px-8 py-24 border-t border-black/10 flex items-center gap-4">
          <div className="flex-1 pr-32">
            <p className="text-white/60 text-[28px] font-['Raleway'] leading-9">
              En Abitacolo cada día damos pasos firmes hacia el éxito, estamos
              buscando inversores visionarios que quieran ser parte de nuestra
              emocionante trayectoria. Únete a nosotros y sé parte de una
              historia de innovación y crecimiento imparable.
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-7">
            <div className="text-white/90 text-[40px] font-['Raleway']">
              ¡Empieza tu historia con nosotros!
            </div>
            <button
              onClick={scrollToContact}
              className="h-14 px-6 py-4 bg-[#333333] rounded-sm text-white text-base font-normal font-['Raleway'] uppercase leading-normal tracking-tight"
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
