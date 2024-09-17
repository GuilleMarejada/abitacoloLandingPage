import React from "react";
import IconLinkdn from "../assets/IconLinkdnWhite.svg";
import IconIG from "../assets/IconIGWhite.svg";
import LogoAbitacolo from "../assets/LogoAbitacoloFooter.png";

const Footer = () => {
  return (
    <div className="w-full  h-[240px] grid justify-center  bg-[#919e32] p-3 ">
<<<<<<< HEAD
        <div className="max-w-[1440px]">
          <div className="flex items-center justify-between gap-[45px]">
        <img
          className="w-[328.99px] h-[93px]"
          src={LogoAbitacolo}
          alt="Logo Abitacolo"
        ></img>

        <div className="max-w-[690.77px] h-[26px] justify-start items-center gap-[45px]  inline-flex">
          <p className="text-white cursor-pointer text-sm ">
            POLITICA DE PRIVACIDAD
          </p>
          <p className="text-white cursor-pointer text-sm ">
            POLITICA DE COOKIES
          </p>
          <div className="flex gap-5">
            <img className="w-6 h-6" src={IconIG} alt="Instagram"></img>
            <img className="w-6 h-6" src={IconLinkdn} alt="LinkedIn"></img>
=======
      <div className="max-w-[1440px]">
        <div className="flex items-center justify-between gap-[45px]">
          <img
            className="w-[328.99px] h-[93px]"
            src={LogoAbitacolo}
            alt="Logo Abitacolo"
          ></img>

          <div className="max-w-[690.77px] h-[26px] justify-start items-center gap-[45px]  inline-flex">
            <p className="text-white cursor-pointer text-sm ">
              POLITICA DE PRIVACIDAD
            </p>
            <p className="text-white cursor-pointer text-sm ">
              POLITICA DE COOKIES
            </p>
            <div className="flex gap-5">
              <img className="w-6 h-6" src={IconIG} alt="Instagram"></img>
              <img className="w-6 h-6" src={IconLinkdn} alt="LinkedIn"></img>
            </div>
>>>>>>> ded1ee603bcce612c37aeebcfe7c6b6b26919c6e
          </div>
        </div>
        <div className=" border mt-2  border-solid border-white mx-[75px] mr-[150px]"></div>
        <div className="w-[875px] h-[68px] p-5 ml-[50px] mt-[25px] flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch justify-start items-center gap-7 inline-flex">
            <p className="text-white text-sm">¿Que es Abitacolo?</p>
            <p className="text-white text-sm">Nuestro equipo</p>
            <p className="text-white text-sm">Hitos Abitacolo</p>
            <p className="text-white text-sm">Nuestros Productos</p>
            <p className="text-white text-sm">Contacts</p>
          </div>

          <p className="text-white text-sm text-center mt-[5px]">
            © 2024 Abitacolo. All rights reserved.
          </p>
        </div>
      </div>
<<<<<<< HEAD
      </div>
=======
>>>>>>> ded1ee603bcce612c37aeebcfe7c6b6b26919c6e
    </div>
  );
};

export default Footer;
