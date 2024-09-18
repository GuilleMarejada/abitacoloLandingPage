import React from "react";

const OurProducts = () => {
  const productInfo = [
    {
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208",
    },
    {
      title: "Titulo 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208",
    },
    {
      title: "Titulo 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208",
    },
    {
      title: "Titulo 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut est at felis sodales tempus.",
      image: "https://via.placeholder.com/320x208",
    },
  ];

  return (
    <div id="products" className="w-full bg-[#1c1c1e] grid justify-center">
      <div className="h-[700px] w-[1440px] px-8 pt-12 pb-32 bg-[#1c1c1e] flex flex-col gap-8">
        <div className="py-4 border-b border-white/10 grid justify-center">
          <h2 className="text-white text-2xl font-semibold font-['Raleway'] uppercase">
            Nuestros productos
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {productInfo.map((product, index) => (
            <div
              key={index}
              className="h-52 bg-white/5 flex items-center gap-8"
            >
              <img
                className="w-80 h-52"
                src={product.image}
                alt={product.title}
              />
              <div className="flex flex-col pr-8 gap-8">
                <h3 className="text-white text-xl font-semibold font-['Raleway'] uppercase">
                  {product.title}
                </h3>
                <p className="w-[296px] text-white/40 text-base font-normal font-['Raleway'] uppercase">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProducts;