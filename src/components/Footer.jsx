import React from "react";
import IconLinkdn from "../assets/IconLinkdnWhite.svg";
import IconIG from "../assets/IconIGWhite.svg";
import AbitacoloBlanco from "../assets/AbitacoloBlanco.webp";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="w-full min-h-[240px] flex justify-center bg-[#919e32]">
      <div className="max-w-[1440px] w-full p-4">
        <div className="md:flex items-center justify-between">
          <Link to="/">
            <img
              className="max-w-[329px] h-auto"
              src={AbitacoloBlanco}
              alt="Logo Abitacolo"
            />
          </Link>
          <div className="flex gap-6 items-center max-md:flex-col-reverse">
            <p className="text-white cursor-pointer text-sm">
              POLÍTICA DE PRIVACIDAD
            </p>
            <p className="text-white cursor-pointer text-sm">
              POLÍTICA DE COOKIES
            </p>
            <div className="flex gap-5">
              <img className="w-6 h-6" src={IconIG} alt="Instagram" />
              <img className="w-6 h-6" src={IconLinkdn} alt="LinkedIn" />
            </div>
          </div>
        </div>

        <hr className="border-white mt-2 mx-5" />

        <div className="flex flex-col mt-5 gap-4">
          <div className="flex gap-7 max-md:flex-col">
            <button
              onClick={() => scrollToSection("AboutUs")}
              className="text-white text-sm"
            >
              ¿Qué es Abitacolo?
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
              Contactos
            </button>
          </div>
          <p className="text-white text-sm mt-1">
            © 2024 Abitacolo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
