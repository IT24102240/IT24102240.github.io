import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "text-white border-[#03DAC5] shadow-md"
    : "text-[#A3BFFA] border-slate-600 hover:border-[#42A5F5] hover:text-white";
  return (
    <button
      className={`${buttonStyle} rounded-full border-2 px-7 py-3 text-lg font-semibold cursor-pointer transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#03DAC5]`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
