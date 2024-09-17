import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from 'prop-types';

const BlogCard = ({
    text,
    blogImage,

}) => {
    return(
        <>
        

        <div className="w-[400] h-50">
            <img className="w-[304] h-44" src={blogImage}></img>
            <p>{text}</p>
        </div>
        </>
    )
}

export default BlogCard;

BlogCard.propTypes = {
    text : PropTypes.string,
    blogImage: PropTypes.string
}