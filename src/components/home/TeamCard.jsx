import React from "react";
import PropTypes from "prop-types";
import IconLinkdn from "../../assets/IconLinkdnBlack.svg";
import IconIG from "../../assets/IconIGBlack.svg";

const TeamCard = ({
  person,
  position,
  linkImage,
  description,
  linkedin,
  instagram,
}) => {
  return (
    <div className="w-full h-[540px] max-w-sm bg-white flex flex-col gap-6 p-4">
      <img
        className="w-[427px] h-[292px] object-scale-down"
        src={linkImage}
        alt="Team member"
      />
      <div className="flex flex-col gap-4">
        <div>
          <h2 className="text-black/90 text-2xl font-semibold uppercase leading-7">
            {person}
          </h2>
          <p className="text-black/90 text-xs uppercase leading-tight">
            {position}
          </p>
        </div>
        <p className="text-[#666666] text-sm uppercase leading-tight">
          {description}
        </p>
        <div className="flex items-center gap-4">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={IconLinkdn} alt="LinkedIn" className="h-6 w-6" />
            </a>
          )}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img className="h-6 w-6" src={IconIG} alt="Instagram" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  person: PropTypes.string,
  position: PropTypes.string,
  // linkImage: PropTypes.img,
  description: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
};

export default TeamCard;
