import React from "react";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";
import TeamContainer from "./components/TeamContainer";

const TeamPageContainer = () => {
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
      <TeamContainer />
    </div>
  );
};

export default TeamPageContainer;
