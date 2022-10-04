import React, { useState } from "react";
import Logo from "../res/img/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const MobileNavbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#56042C] text-pink-50">
      {/* logo */}
      <div>
        <img src={Logo} alt="World Cup 2022 Logo" style={{ width: "50px" }} />
      </div>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <div className="hidden"></div>
    </div>
  );
};

export default MobileNavbar;
