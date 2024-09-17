import React from "react";
import IconLinkdn from "../assets/IconLinkdnWhite.svg";
import IconIG from "../assets/IconIGWhite.svg";
import LogoAbitacolo from "../assets/LogoAbitacoloFooter.png";

const Footer = () => {
  return (
    <div className="w-full h-[240px] bg-[#919e32] p-3">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex items-center justify-between gap-[45px]">
          <img
            className="w-[328.99px] h-[93px]"
            src={LogoAbitacolo}
            alt="Logo Abitacolo"
          />
          <div className="w-[690.77px] h-[26px] justify-start items-center gap-[45px] inline-flex">
            <p className="text-white cursor-pointer text-sm">
              POLITICA DE PRIVACIDAD
            </p>
            <p className="text-white cursor-pointer text-sm">
              POLITICA DE COOKIES
            </p>
            <div className="flex gap-5">
              <img className="w-6 h-6" src={IconIG} alt="Instagram" />
              <img className="w-6 h-6" src={IconLinkdn} alt="LinkedIn" />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-white text-sm">
            © 2024 Abitacolo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
