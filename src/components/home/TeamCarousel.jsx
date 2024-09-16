import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import FlechaIzq from "../../assets/FlechaIzq.svg";
import FlechaDrch from "../../assets/FlechaDrch.svg";

const team = [
  {
    person: "Juan Pérez",
    position: "CEO",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "Juan es el fundador y CEO de la empresa, con más de 15 años de experiencia en la industria.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    instagram: "https://www.instagram.com/juanperez",
  },
  {
    person: "Ana Rodríguez",
    position: "CTO",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "Ana lidera el equipo de tecnología y es experta en desarrollo de software y arquitectura de sistemas.",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
  },
  {
    person: "Carlos Gómez",
    position: "CFO",
    linkImage: "https://via.placeholder.com/430x300",
    description:
      "Carlos gestiona las finanzas de la empresa y se asegura de su estabilidad económica.",
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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (team.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (team.length - 2)) % (team.length - 2)
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-100 w-full max-w-7xl mx-auto p-8">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {team.map((member, index) => (
            <div key={index} className="w-1/3 flex-shrink-0">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 space-x-4">
        <button className="p-2" onClick={prevSlide}>
          {/* Flecha izquierda */}
          <img src={FlechaIzq} alt="" />
        </button>

        <div className="flex space-x-2">
          {[...Array(team.length - 2)].map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? "bg-[#919e32]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <button className="p-2" onClick={nextSlide}>
          <img src={FlechaDrch} alt="" />
        </button>
      </div>
    </div>
  );
};
export default TeamCarousel;
