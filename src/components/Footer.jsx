import React from "react";

const Footer = () =>  {
    return(
        <div className="h-60 relative bg-[#919e32] flex">
            <img className="h-[68px] left-[115px] top-[157.40px] absolute flex-col justify-start items-start gap-4 inline-flex" src="/src/assets/LogoAbitacoloFooter.png"></img>
            

            <div className="flex justify-start">
                <span className="text-white">POLITICA DE PRIVACIDAD</span>
                <span className="text-white">POLITICA DE COOKIES</span>
                <div className="">
                <img src="/src/assets/IconX.svg"></img>
                <img src="/src/assets/IconIG.svg"></img>
                <img src="/src/assets/IconLinkdn.svg"></img>
                </div>
            </div>
            

        </div>
    )
}


export default Footer
