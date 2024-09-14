import React from "react";
import imgBanner from "../../assets/Home/fondoHome.jpeg";

const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-black/70 grid justify-center">
      <div
        className="w-[1440px] bg-cover bg-center grid justify-center"
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <div className="px-8 py-24 grid gap-2.5 bg-gradient-to-r from-black/80 to-black/50">
          <div className="flex items-end gap-4 justify-self-end">
            <h1 className="text-white text-[56px] font-bold font-['Raleway'] uppercase leading-[64px]">
              Transforma tu espacio con muebles únicos
            </h1>
            <button className="px-6 py-4 bg-[#d5d5d5]/10 rounded-sm backdrop-blur-xl flex">
              <span className="text-white text-base font-bold font-['Raleway'] uppercase leading-normal tracking-tight">
                MÁS INFORMACIÓN
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
