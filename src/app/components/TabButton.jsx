import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b-2 border-[#03DAC5] font-bold"
    : "text-[#A3BFFA] hover:text-white";

  return (
    <button onClick={selectTab} className="cursor-pointer px-2 py-1">
      <p className={`text-lg transition-all duration-300 ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
