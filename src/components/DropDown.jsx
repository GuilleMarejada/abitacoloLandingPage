import React, { useState, useCallback } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = useCallback(() => setIsOpen((prev) => !prev), []);

  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="text-left text-blue-500  sm:flex sm:justify-end">
      <button
        onClick={toggleModal}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-10 py-10 text-sm font-semibold text-gray-900"
        aria-label="Toggle menu"
      >
        <i className="fa-solid fa-bars text-4xl text-white"></i>
      </button>
      {isOpen && (
        <div className="absolute w-[430px] mt-[34px] rounded-md bg-[#333333] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex justify-end">
            <button
              onClick={toggleModal}
              className="px-4 py-2 text-left text-lg text-white hover:bg-verdeAbitacolo hover:text-gray-900"
              aria-label="Close menu"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
          <div className="flex flex-col text-center uppercase text-white text-2xl gap-2 p-5">
            <button
              onClick={() => scrollToSection("AboutUs")}
              className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo"
            >
              ¿Qué es Abitacolo?
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo"
            >
              Nuestro Equipo
            </button>
            <button
              onClick={() => scrollToSection("hitos")}
              className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo"
            >
              Hitos Abitacolo
            </button>
            <button
              onClick={() => scrollToSection("products")}
              className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo"
            >
              Nuestros Productos
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo"
            >
              Contáctanos
            </button>
            <button className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              ES/EN
            </button>
            <div className="flex justify-center">
              <div className="border-2 border-verdeAbitacolo w-24 rounded-[10px] mt-4"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropDown;
