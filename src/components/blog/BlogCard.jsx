import React from "react";
import PropTypes from "prop-types";

const BlogCard = ({ text, blogImage }) => {
  return (
    <>
      <div className="flex flex-col gap-3 p-5 lg:w-76 md:w-76 w-96  ">
        <img className="mt-5" src={blogImage} />
        <p className="text-center text-xl">{text}</p>
      </div>
    </>
  );
};

export default BlogCard;

BlogCard.propTypes = {
  text: PropTypes.string,
  blogImage: PropTypes.string,
};
