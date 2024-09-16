import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";

const team = [
  {
    person: "Juan Pérez",
    position: "CEO",
    linkImage: "https://example.com/images/juan.jpg",
    description:
      "Juan es el fundador y CEO de la empresa, con más de 15 años de experiencia en la industria.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    instagram: "https://www.instagram.com/juanperez",
  },
  {
    person: "Ana Rodríguez",
    position: "CTO",
    linkImage: "https://example.com/images/ana.jpg",
    description:
      "Ana lidera el equipo de tecnología y es experta en desarrollo de software y arquitectura de sistemas.",
    linkedin: "https://www.linkedin.com/in/anarodriguez",
    instagram: "https://www.instagram.com/anarodriguez",
  },
  {
    person: "Carlos Gómez",
    position: "CFO",
    linkImage: "https://example.com/images/carlos.jpg",
    description:
      "Carlos gestiona las finanzas de la empresa y se asegura de su estabilidad económica.",
    linkedin: "https://www.linkedin.com/in/carlosgomez",
    instagram: "https://www.instagram.com/carlosgomez",
  },
  {
    person: "María Fernández",
    position: "COO",
    linkImage: "https://example.com/images/maria.jpg",
    description:
      "María coordina las operaciones internas para garantizar la eficiencia en todos los procesos.",
    linkedin: "https://www.linkedin.com/in/mariafernandez",
    instagram: "https://www.instagram.com/mariafernandez",
  },
  {
    person: "Pedro Sánchez",
    position: "CMO",
    linkImage: "https://example.com/images/pedro.jpg",
    description:
      "Pedro lidera las estrategias de marketing, ayudando a la empresa a llegar a nuevos mercados.",
    linkedin: "https://www.linkedin.com/in/pedrosanchez",
    instagram: "https://www.instagram.com/pedrosanchez",
  },
  {
    person: "Laura Martínez",
    position: "HR Manager",
    linkImage: "https://example.com/images/laura.jpg",
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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gris2 w-full max-w-5xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
      >
        {team.map((member, index) => (
          <div key={index} className="w-1/3 flex-shrink-0 p-4">
            <TeamCard {...member} />
          </div>
        ))}
      </div>
      {/* Flecha izquierda */}
      <button
        className="absolute bottom-4 left-1/4 transform translate-x-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={prevSlide}
      >
        &#8592;
      </button>
      {/* Flecha derecha */}
      <button
        className="absolute bottom-4 right-1/4 transform -translate-x-1/2 bg-white bg-opacity-50 rounded-full p-2"
        onClick={nextSlide}
      >
        &#8594;
      </button>
    </div>
  );
};

export default TeamCarousel;
