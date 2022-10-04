import React from "react";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";
import WelcomeMessage from "./components/WelcomeMessage";

const HomepageContainer = () => {
  let width = window.innerWidth;
  let nav = null
  if (width > 768) {
    nav = <DesktopNavbar />
  } else {
    nav = <MobileNavbar />
  }

  return (
    <div>
      {nav}
      <WelcomeMessage />
    </div>
  )
};

export default HomepageContainer;
