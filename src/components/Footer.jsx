import React from "react";
import IconLinkdn from "../assets/IconLinkdnWhite.svg";
import IconIG from "../assets/IconIGWhite.svg";
import AbitacoloBlanco from "../assets/AbitacoloBlanco.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[240px] grid justify-center bg-[#919e32]">
      <div className="max-w-[1440px]">
        <div className="flex items-center justify-between gap-11">
          <Link to="/">
            <img
              className="w-[329px] h-[93px]"
              src={AbitacoloBlanco}
              alt="Logo Abitacolo"
            />
          </Link>

          <div className="flex gap-11 items-center">
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

        <div className="border border-white mt-2 mx-20 mr-36"></div>

        <div className="w-[875px] flex-col ml-[50px] mt-[25px] p-5 gap-4">
          <div className="flex gap-7">
            <button
              onClick={() => scrollToSection("AboutUs")}
              className="text-white text-sm"
            >
              ¿Que es Abitacolo?
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-white text-sm"
            >
              Nuestro equipo
            </button>
            <button
              onClick={() => scrollToSection("hitos")}
              className="text-white text-sm"
            >
              Hitos Abitacolo
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="text-white text-sm"
            >
              Nuestros Productos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-white text-sm"
            >
              Contacts
            </button>
          </div>
          <p className="text-white text-sm text-center mt-1">
            © 2024 Abitacolo. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
