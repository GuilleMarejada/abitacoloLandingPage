import React from "react";
import ChairBlogImage from "../../assets/Blog/ChairBlogImage.jpeg";

const BannerBlog = () => {
  return (
    <header className="w-full h-[856px] bg-black/70 flex justify-center items-end">
      <div
        className="max-w-[1440px] w-full h-full bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${ChairBlogImage})` }}
      >
        <div className="px-8 py-24 flex flex-col gap-2.5 max-w-[989px]">
          <h1 className="text-white text-4xl font-bold uppercase leading-[64px]">
            Abitacolo: Más que una Startup, una Historia de Éxito
          </h1>
          <div className="max-w-[989px]">
            <span className="text-white text-xl font-bold font-['Raleway'] leading-[34px]">
              Abitacolo es un ejemplo de que con esfuerzo y colaboración se
              pueden alcanzar grandes metas
            </span>
            <span className="text-white text-xl font-normal font-['Raleway'] leading-[34px]">
              . En este blog, queremos compartir nuestra experiencia y
              conocimientos contigo, además de mostrarte los valores que nos
              guían.
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BannerBlog;
