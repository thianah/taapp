import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header bg-stone-950 text-white p-4 flex justify-between items-center">
      <Link 
        to="/" 
        className="text-2xl font-extrabold tracking-wide hover:text-[#b8a19b] transition-colors"
      >
        TAlovestory'25
      </Link>
    </div>
  );
};

export default Header;
