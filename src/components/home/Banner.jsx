import React from "react";
import imgBanner from "../../assets/Home/fondoHome.jpeg";

const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-black/70 grid justify-center">
      <div
        className="w-[1376px] flex justify-center bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <div className="px-8 py-24 flex-col justify-end items-start gap-2.5 inline-flex bg-gradient-to-r from-black/80 to-black/50">
          <div className="flex-col justify-start items-start gap-16 flex">
            <div className="justify-start items-end gap-4 inline-flex">
              <h1 className="grow shrink basis-0 text-white text-[56px] font-bold font-['Raleway'] uppercase leading-[64px]">
                Transforma tu espacio con muebles únicos
              </h1>
              <button className="px-6 py-4 bg-[#d5d5d5]/10 rounded-sm backdrop-blur-xl justify-start items-start gap-1 flex">
                <span className="text-white text-base font-bold font-['Raleway'] uppercase leading-normal tracking-tight">
                  MÁS INFORMACIÓN
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
