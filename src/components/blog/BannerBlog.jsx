import React from "react";
import ChairBlogImage from "../../assets/Blog/ChairBlogImage.jpeg";
import DropDown from "../DropDown";
const BannerBlog = () => {
  return (
    <>
      <header className="w-full h-[856px] bg-black/70 grid justify-center">
        <div
          className="w-[1446px] h-[856px] bg-cover bg-center grid justify-center"
          style={{ backgroundImage: `url(${ChairBlogImage})` }}
        >
          <DropDown />
          <div className="flex flex-col justify-end mb-20 mr-48 ">
            <h1 className="text-white text-4xl font-bold  uppercase leading-[64px]">
              Abitacolo: Más que una Startup, una Historia de Éxito
            </h1>
            <div className="w-[989px]">
              <p className="text-white text-lg">
                Abitacolo es un ejemplo de que con esfuerzo y colaboración se
                pueden alcanzar grandes metas. En este blog, queremos compartir
                nuestra experiencia y conocimientos contigo, además de mostrarte
                los valores que nos guían.
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default BannerBlog;
