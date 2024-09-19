import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import FlechaIzq from "../../assets/FlechaIzq.svg";
import FlechaDrch from "../../assets/FlechaDrch.svg";
import GuillermoAbitacolo from "../../assets/Team/GPC_Fotografía.webp";
import CathyAbitacolo from "../../assets/Team/JCM_Fotografia.webp";
import ManuAbitacolo from "../../assets/Team/MBR_Fotografía.webp";

const team = [
  {
    person: "Juliette C. Mallen",
    position: "Founder & CEO",
    linkImage: CathyAbitacolo,
    description:
      "Soy Cathy, arquitecta con especialización en comunicación arquitectónica y experiencia en la dirección creativa de eventos culturales.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    instagram: "https://www.instagram.com/juanperez",
  },
  {
    person: "Guillermo Perales",
    position: "Co-Founder",
    linkImage: GuillermoAbitacolo,
    description:
      "¡Hola! Soy Guille, madrileño y arquitecto habilitado por la Escuela Técnica Superior de Arquitectura de Madrid (ETSAM), con estudios complementarios en el University College de Dublín (Irlanda). También me he formado en diseño gráfico en el Istituto Marangoni de Milán (Italia) y cuento con el Máster en Comunicación Arquitectónica de la Universidad Politécnica de Madrid (UPM).",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
  },
  {
    person: "Manuel Ben R.",
    position: "UX Product Designer Specialist",
    linkImage: ManuAbitacolo,
    description:
      "Soy Diseñador de Productos Digitales con más de 2 años de experiencia en el ecosistema digital, donde he demostrado una sólida capacidad para desarrollar soluciones centradas en el usuario que se alinean con los objetivos empresariales y generan ingresos. Mi enfoque está en crear diseños que resuelvan problemas reales y mejoren la experiencia del usuario.",
    linkedin: "https://www.linkedin.com/in/carlosgomez",
    instagram: "https://www.instagram.com/carlosgomez",
  },
  {
    person: "María Fernández",
    position: "COO",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "María coordina las operaciones internas para garantizar la eficiencia en todos los procesos.",
    linkedin: "https://www.linkedin.com/in/mariafernandez",
    instagram: "https://www.instagram.com/mariafernandez",
  },
  {
    person: "Pedro Sánchez",
    position: "CMO",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "Pedro lidera las estrategias de marketing, ayudando a la empresa a llegar a nuevos mercados.",
    linkedin: "https://www.linkedin.com/in/pedrosanchez",
    instagram: "https://www.instagram.com/pedrosanchez",
  },
  {
    person: "Laura Martínez",
    position: "HR Manager",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "Laura gestiona el talento humano y se encarga de los procesos de contratación y bienestar.",
    linkedin: "https://www.linkedin.com/in/lauramartinez",
    instagram: "https://www.instagram.com/lauramartinez",
  },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % team.length);
  const prevSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex - 1 + team.length) % team.length);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setCardsToShow(width >= 1100 ? 3 : width >= 900 ? 2 : 1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 10000);
    return () => clearInterval(intervalId);
  }, []);

  const getVisibleCards = () => {
    const visible = team.slice(currentIndex, currentIndex + cardsToShow);
    const extra = team.slice(
      0,
      Math.max(0, currentIndex + cardsToShow - team.length)
    );
    return visible.concat(extra);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto p-8 bg-[#0000000A] rounded-sm">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {getVisibleCards().map((member, index) => (
            <div
              key={index}
              className={`flex justify-center ${
                cardsToShow === 3 ? "w-1/3" : "w-full"
              }`}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button className="p-2" onClick={prevSlide} aria-label="Ver anterior">
          <img src={FlechaIzq} alt="Anterior" />
        </button>

        <div className="flex space-x-2">
          {team.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-[#919e32]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button className="p-2" onClick={nextSlide} aria-label="Ver siguiente">
          <img src={FlechaDrch} alt="Siguiente" />
        </button>
      </div>
    </div>
  );
};

export default TeamCarousel;
