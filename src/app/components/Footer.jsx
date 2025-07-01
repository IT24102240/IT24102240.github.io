import React from "react";

const Footer = () => {
  return (
    <footer className="footer border-t border-t-[#33353F] text-white">
      <div className="container p-4 flex justify-center items-center flex-col">
        <p className="text-[#ADB7BE] text-sm mb-2 text-center break-words">
          © {new Date().getFullYear()} <br className="block sm:hidden" />
          Kavindu Alwis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
