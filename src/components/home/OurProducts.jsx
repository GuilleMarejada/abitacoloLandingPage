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
    <div
      id="products"
      className="w-full bg-[#1c1c1e] grid justify-center min-h-[700px] pb-6"
    >
      <div className="max-w-[1440px] w-full px-8 pt-12 bg-[#1c1c1e] flex flex-col gap-8">
        <div className="py-4 border-b border-white/10 grid justify-center">
          <h2 className="text-white text-2xl font-semibold font-['Raleway'] uppercase">
            Nuestros productos
          </h2>
        </div>
        <div className="grid xl:grid-cols-2 gap-8">
          {productInfo.map((product, index) => (
            <div
              key={index}
              className=" bg-white/5 md:flex items-center max-w-[680px] max-md:max-w-[398px]"
            >
              <img className="w-full" src={product.image} alt={product.title} />
              <div className="flex flex-col p-4  gap-8">
                <h3 className="text-white text-xl font-semibold font-['Raleway'] uppercase">
                  {product.title}
                </h3>
                <p className="w- text-white/40 text-base font-normal font-['Raleway'] uppercase">
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
