import React, { useState } from "react";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden text-left text-blue-500 sm:absolute sm:flex sm:justify-end">
      {/* Botón de apertura del menú */}
      <div>
        <button
          onClick={openModal}
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-10 py-10 text-sm font-semibold text-gray-900 shadow-sm"
        >
          <i className="fa-solid fa-bars text-4xl" style={{ color: "#FFFFFF" }}></i>
        </button>
      </div>

      {/* Menú desplegable */}
      {isOpen && (
        <div className="absolute w-[430px] mt-[34px] rounded-md bg-[#333333] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
          {/* Botón para cerrar el menú */}
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="px-4 py-2 text-left text-lg text-white hover:bg-verdeAbitacolo hover:text-gray-900"
            >
              <i className="fa-solid fa-x"></i>
            </button>
          </div>

          {/* Opciones del menú */}
          <div className="flex flex-col text-center uppercase text-white text-xl gap-2 p-3">
            <a href="#" className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              ¿Qué es Abitacolo?
            </a>
            <a href="#" className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              Nuestro Equipo
            </a>
            <a href="#" className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              Hitos Abitacolo
            </a>
            <a href="#" className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              Nuestros Productos
            </a>
            <a href="#" className="w-full px-4 py-4 bg-gray-700 hover:bg-verdeAbitacolo">
              Contáctanos
            </a>
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
