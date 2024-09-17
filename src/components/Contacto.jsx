import React from "react";

const Contacto = () => {
  return (
    <div id="contacto" className="grid justify-items-center mb-5">
      <div className="grid gap-10 mb-10">
        <p className="text-[42px] font-semibold leading-[52px]">
          Ponte en Contacto con Nosotros
        </p>
        <div className="max-w-[714px] text-[#151438]/40 text-[22px] font-medium leading-loose">
          ¿Quieres más información sobre este proyecto? Puedes escribirnos o
          llamarnos, te informaremos encantados.
        </div>
        <div className="w-[308px] text-black text-base font-normal leading-relaxed">
          +34 xxx xxx xxx
        </div>
      </div>
      <form
        action="https://formsubmit.co/8ef3a12491cf88e883476dae52fd2893"
        method="POST"
        className="h-[516px] flex flex-col gap-[35px]"
      >
        <div className="max-w-[783.71px] flex gap-2 justify-between items-center">
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            autoComplete="name"
            className="w-[476px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium leading-relaxed placeholder-[#151438]/40"
          />
          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            autoComplete="tel"
            className="w-auto h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium leading-relaxed placeholder-[#151438]/40"
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="email"
          className="max-w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium leading-relaxed placeholder-[#151438]/40"
        />
        <select
          name="motivo"
          autoComplete="off"
          className="max-w-[792px] h-[50px] rounded-sm border border-[#666666] px-6 text-lg font-medium leading-relaxed text-[#151438]/40"
        >
          <option value="">Indícanos el motivo del contacto</option>
          <option value="consulta">Consulta</option>
          <option value="soporte">Soporte</option>
          <option value="otros">Otros</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Tu mensaje"
          autoComplete="off"
          className="max-w-[792px] h-[170px] rounded-sm border border-[#666666] p-4 text-lg font-medium leading-relaxed placeholder-[#151438]/40 resize-none"
        />
        <button
          type="submit"
          className="w-60 h-14 bg-[#919e32]/60 rounded-sm text-white text-base font-normal uppercase hover:bg-[#919e32]/80 transition-colors"
        >
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Contacto;
