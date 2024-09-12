import React, { useState } from "react";

const Contacto = () => {
  return (
    <div className="grid justify-items-center mb-5">
      <div className="grid gap-10 mb-10">
        {" "}
        <p className="text-[42px] font-semibold font-['Raleway'] leading-[52px]">
          Ponte en Contacto con Nosotros
        </p>
        <div className="w-[714px] h-[68.02px] text-[#151438]/40 text-[22px] font-medium font-['Raleway'] leading-loose">
          Quieres más información sobre este proyecto, puedes escribirnos o
          llamarnos te informaremos encantados
        </div>
        <div className="w-[308px] h-[27.63px] text-black text-base font-normal font-['Raleway'] leading-relaxed">
          +34 xxx xxx xxx
        </div>{" "}
      </div>
      <form
        action="https://formsubmit.co/8ef3a12491cf88e883476dae52fd2893"
        method="POST"
        className="h-[516px] flex-col justify-start items-start gap-[35px] inline-flex"
      >
        <div className="w-[783.71px] justify-between items-center inline-flex">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            className="w-[476px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium font-['Raleway'] leading-relaxed placeholder-[#151438]/40"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            className="w-auto h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium font-['Raleway'] leading-relaxed placeholder-[#151438]/40"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium font-['Raleway'] leading-relaxed placeholder-[#151438]/40"
        />
        <select
          name="motivo"
          className="w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium font-['Raleway'] leading-relaxed text-[#151438]/40"
        >
          <option value="">Indícanos el motivo del contacto</option>
          <option value="consulta">Consulta</option>
          <option value="soporte">Soporte</option>
          <option value="otros">Otros</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          className="w-[792px] h-[170px] rounded-sm border border-[#666666] p-4 text-lg font-medium font-['Raleway'] leading-relaxed placeholder-[#151438]/40 resize-none"
        />
        <button
          type="submit"
          className="w-60 h-14 px-6 py-4 bg-[#919e32]/60 rounded-sm justify-center items-center gap-1 inline-flex text-white text-base font-normal font-['Raleway'] uppercase leading-normal tracking-tight hover:bg-[#919e32]/80 transition-colors"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contacto;
