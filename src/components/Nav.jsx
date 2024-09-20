import React, { useEffect, useState } from "react";
import DropDown from "./DropDown";
import AbitacoloBlanco from "../assets/AbitacoloBlanco.webp";
import { Link } from "react-router-dom";


const Nav = () => {
  const [isMobile , setIsMobile] = useState(false);
  const [isMiddle , setIsMiddle] = useState(false);  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsMiddle(window.innerWidth >= 768 && window.innerWidth <= 1023);
    };

    handleResize(); // Llama a la función al inicio
    window.addEventListener('resize', handleResize); // Detecta cambios en el tamaño de la ventana

    // Limpia el listener al desmontar el componente
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <div className="container absolute">  
      {
        isMobile || isMiddle ? (     
          <div className="gap-1  flex justify-between  w-full px-4 ">
  <Link to="/">
    <img
      className="w-[108px] h-auto max-sm:mt-10"
      src={AbitacoloBlanco}
      alt="Abitacolo"
    />
  </Link>

  {/* El DropDown ahora es parte del flujo de flexbox */}
  <DropDown className="relative" />
</div>

        ) : (
    <div className="w-full absolute flex justify-center">
      <div className="max-w-[1440px] w-full h-[65px] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1 ">
          <Link to="/">
            <img
              className="w-[108px] h-auto mx-[31px]"
              src={AbitacoloBlanco}
              alt="Abitacolo"
            />
          </Link>
          <button
            onClick={() => scrollToSection("AboutUs")}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm flex items-start gap-1 max-lg:hidden"
          >
            <div className="text-white text-sm font-normal uppercase leading-tight tracking-tight">
              ¿Que es abitacolo?
            </div>
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm flex items-start gap-1 max-lg:hidden"
          >
            <div className="text-white text-sm font-normal uppercase leading-tight tracking-tight">
              Nuestro equipo
            </div>
          </button>
          <button
            onClick={() => scrollToSection("hitos")}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm flex items-start gap-1 max-lg:hidden"
          >
            <div className="text-white text-sm font-normal uppercase leading-tight tracking-tight">
              Hitos abitacolo
            </div>
          </button>
          <button
            onClick={() => scrollToSection("products")}
            className="px-2 py-1.5 bg-[#2e2f32] rounded-sm flex items-start gap-1 max-lg:hidden"
          >
            <div className="text-white text-sm font-normal uppercase leading-tight tracking-tight">
              Nuestros productos
            </div>
          </button>
        </div>
        <div className="flex items-center gap-2 max-lg:hidden">
          <div className="px-2 py-1.5 bg-white/90 rounded-sm backdrop-blur-sm flex items-start gap-1">
            <div className="text-black/90 text-sm font-normal uppercase leading-tight tracking-tight">
              ES
            </div>
            <div className="w-5 h-5 relative">
              <div className="w-3.5 h-3.5 left-[3px] top-[3px] absolute">
                <div className="w-3.5 h-3.5 rounded-full border-2 border-black/90" />
              </div>
            </div>
          </div>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-white text-sm font-normal h-fit px-2 py-1.5 uppercase leading-tight tracking-tight bg-[#919e32] rounded-sm flex items-start"
          >
            Contáctanos
          </button>
        </div>
      </div>
    </div>
        )}
    </div>
  );       
         
};

export default Nav;
