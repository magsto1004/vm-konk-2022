import React from "react";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";
import InfoContainer from "./components/InfoContainer"

const InfoPageContainer = () => {
  let width = window.innerWidth;
  let nav = null;
  if (width > 768) {
    nav = <DesktopNavbar />;
  } else {
    nav = <MobileNavbar />;
  }

  return (
    <div>
      {nav}
      <InfoContainer />
    </div>
  );
};

export default InfoPageContainer;
