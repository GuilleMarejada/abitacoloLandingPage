import React from "react";

const AboutOurJob = () => {
  return (
    <div className="w-full bg-white grid justify-center">
      <div className="h-[748px] px-8 py-24 flex-col justify-start items-center gap-24 inline-flex">
        <div className="w-[796px] text-center text-black/90 text-[56px] font-normal font-['Raleway'] uppercase leading-[64px]">
          ¿Como trabajamos?
        </div>
        <div className="justify-start items-start gap-4 inline-flex">
          <div className="w-[448px] px-8 pt-60 pb-12 bg-black/20 rounded shadow flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-white text-[28px] font-normal font-['Raleway'] uppercase leading-loose">
                Rescatamos
              </div>
              <div className="self-stretch text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                nos ocupamos de recoger muebles
                <br />
                desechados, buscamos esos tesoros que ya no quiere y le damos
                una segunda vida.
              </div>
            </div>
          </div>
          <div className="justify-start items-start gap-2.5 flex">
            <div className="w-[448px] px-8 pt-60 pb-12 bg-gradient-to-b from-[#1a1d18] to-[#242b1f] rounded shadow flex-col justify-start items-start gap-8 inline-flex">
              <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
                <div className="self-stretch text-white text-[28px] font-normal font-['Raleway'] uppercase leading-loose">
                  Restauramos
                </div>
                <div className="self-stretch text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                  Nuestro equipo restaura y reinventa cada pieza con pasión, le
                  damos una devolviendo a la vida a cada pieza
                </div>
              </div>
            </div>
          </div>
          <div className="w-[448px] px-8 pt-60 pb-12 bg-gradient-to-b from-[#350302] to-[#350302] rounded shadow flex-col justify-start items-start gap-8 inline-flex">
            <div className="self-stretch h-[108px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-white text-[28px] font-normal font-['Raleway'] uppercase leading-loose">
                entregamos
              </div>
              <div className="self-stretch text-white text-sm font-normal font-['Raleway'] uppercase leading-tight">
                Exhibimos nuestras creaciones en nuestra plataforma para que
                encuentres tu favorita, listos para tu hogar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOurJob;
