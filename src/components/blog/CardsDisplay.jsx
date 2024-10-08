import React from "react";
import BlogCard from "./BlogCard";

const cards = [
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
  {
    image: "https://via.placeholder.com/304x176",
    text: "Lorem ipsum dolor sit amet cont quidem, libero sed doloremqu? Aliquid deserunt laborum vero voluptates ad eum eligendi porro",
  },
];

const CardsDisplay = () => {
  return (
    <>
      <h1 className="uppercase text-4xl font-bold text-center text-verdeAbitacolo mt-10">
        {" "}
        Descubre nuestra historia
      </h1>
      <div className="flex justify-center">
        <div className="w-full grid justify-items-center gap-4 lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1">
          {cards.map((card, index) => (
            <BlogCard key={index} text={card.text} blogImage={card.image} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsDisplay;
