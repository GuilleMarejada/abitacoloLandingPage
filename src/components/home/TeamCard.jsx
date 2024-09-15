import React from "react";
import PropTypes from "prop-types";
import instagramLogo from "../../assets/IconIG.svg";
import linkedinLogo from "../../assets/IconLinkdn.svg";
const TeamCard = ({
  person,
  position,
  linkImage,
  description,
  linkedin,
  instagram,
}) => {
  return (
    <div className="h-[538px] w-[427px] pt-0.5 pb-12 bg-white flex-col gap-6 inline-flex">
      <img className="w-[427px] h-[292px]" src={linkImage} alt="Team member" />
      <div className="self-stretch h-[172px] px-4 flex-col gap-6 flex">
        <div className="self-stretch h-[60px] flex-col gap-3 flex">
          <div className="self-stretch text-black/90 text-2xl font-semibold font-['Raleway'] uppercase leading-7">
            {person}
          </div>
          <div className="self-stretch text-black/90 text-xs font-normal font-['Raleway'] uppercase leading-tight">
            {position}
          </div>
        </div>
        <div className="self-stretch h-[88px] flex-col gap-6 flex">
          <div className="self-stretch text-[#666666] text-sm font-normal font-['Raleway'] uppercase leading-tight">
            {description}
          </div>
          <div className="w-[395px] flex items-center gap-4">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinLogo} alt="LinkedIn" className="h-6 w-6" />
              </a>
            )}
            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <img src={instagramLogo} alt="Instagram" className="h-6 w-6" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
TeamCard.propTypes = {
  person: PropTypes.string,
  position: PropTypes.string,
  linkImage: PropTypes.string,
  description: PropTypes.string,
  linkedin: PropTypes.string,
  instagram: PropTypes.string,
};

export default TeamCard;
