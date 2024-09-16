import React from "react";
import imgBanner from "../../assets/Home/fondoHome.jpeg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="w-full h-[800px] bg-black/70 grid justify-center">
      <div
        className="w-[1440px] bg-cover bg-center grid justify-center"
        style={{ backgroundImage: `url(${imgBanner})` }}
      >
        <div className="px-8 py-24 grid gap-2.5 bg-gradient-to-r from-black/80 to-black/50">
          <div className="flex items-end gap-4 justify-self-end">
            <h1 className="text-white text-[56px] font-bold  uppercase leading-[64px]">
              Transforma tu espacio con muebles únicos
            </h1>
            <Link to={"/Blog"}>
              <button className="px-6 h-14 bg-[#d5d5d5]/10 rounded-sm backdrop-blur-xl flex items-center justify-center">
                <span className="text-white text-base font-bold uppercase leading-none tracking-tight whitespace-nowrap">
                  MÁS INFORMACIÓN
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
