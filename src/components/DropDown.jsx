import React, { useEffect } from "react";
import { useState } from "react";
const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="lg:hidden text-left text-blue-500 sm:absolute sm:flex sm:justify-end">
      <div className="">
        <button
          onClick={openModal}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-10 py-10 text-sm font-semibold text-gray-900 shadow-sm "
        >
          <i
            className="fa-solid fa-bars text-4xl"
            style={{ color: "#FFFFFF" }}
          ></i>
        </button>
      </div>
      {isOpen && (
        <div className="absolute w-[430px] mt-[34px] rounded-md bg-[#333333] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-left text-lg text-white hover:bg-verdeAbitacolo hover:text-gray-900"
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
            <div className="flex justify-center">
              <p className="border-2 border-verdeAbitacolo w-24 rounded-[10px] mt-4"></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default DropDown;
