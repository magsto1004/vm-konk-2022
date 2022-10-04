import React from "react";
import Logo from "../res/img/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100%] w-[25%] fixed z-[1] top-[0] left-[0] overflow-x-hidden px-4 pt-5 flex flex-col items-center bg-[#56042C] text-white">
      {/* header */}
      <div className="fixed w-[25%] h-[80px] flex items-center z-[2] pb-3">
        <img src={Logo} style={{ width: "50px" }} />
        <h1 className="text-2xl lg:text-4xl">VM KONK 2022</h1>
      </div>

      {/* menu */}
      <ul className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center">
        <li className="py-6 text-2xl lg:text-4xl"><Link to="/">Hjem</Link></li>
        <li className="py-6 text-2xl lg:text-4xl"><Link to="/info">Info</Link></li>
        <li className="py-6 text-2xl lg:text-4xl"><Link to="/innlevering">Innlevering</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;
