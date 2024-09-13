import React from "react";

const Banner = () => {
  return (
    <div className="h-[800px] px-8 py-24 bg-gradient-to-r from-black to-black flex-col justify-end items-start gap-2.5 inline-flex">
      <div className="flex-col justify-start items-start gap-16 flex">
        <div className="w-[1376px] justify-start items-end gap-4 inline-flex">
          <div className="grow shrink basis-0 text-white text-[56px] font-bold font-['Raleway'] uppercase leading-[64px]">
            Transforma tu espacio con muebles únicos
          </div>
          <div className="px-6 py-4 bg-[#d5d5d5]/10 rounded-sm backdrop-blur-xl justify-start items-start gap-1 flex">
            <div className="text-white text-base font-bold font-['Raleway'] uppercase leading-normal tracking-tight">
              MÁS INFORMACIÓN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
