import React from "react";
import ChairBlogImage from "../../assets/Blog/ChairBlogImage.jpeg"
import imgBanner from "../../assets/Home/fondoHome.jpeg";
import { Link } from "react-router-dom";
import DropDown from "../DropDown";



const BannerBlog = () => {
  return (
    <>
    
    <div className=" h-[700px] bg-black/70 grid justify-center   ">
      
      <div
        className="w-full max-w-[1446px]  max-sm:h-[711px] bg-cover bg-center grid "
        style={{ backgroundImage: `url(${ChairBlogImage})` }}
        >
        
       <div className="flex flex-col justify-end w-full ">
         
            <h1 className="text-white text-4xl font-bold  uppercase leading-[64px] max-sm:text-start max-sm:p-2 max-sm:text-3xl max-sm:mr-10 max-sm:ml-4">
            Abitacolo: Más que una Startup, una Historia de Éxito
            </h1>
            <div className="w-full">
            <p className="text-white text-lg max-sm:text-start max-sm:p-2 max-sm:ml-3 max-sm:mr-20">Abitacolo es un ejemplo de que con esfuerzo y colaboración se pueden alcanzar grandes metas. En este blog, queremos compartir nuestra experiencia y conocimientos contigo, además de mostrarte los valores que nos guían.</p>
            </div>
           
          </div>
        </div>
      </div>
      </>
   
  );
};

export default BannerBlog;
