import React from "react";
import DesktopNavbar from "../DesktopNavbar";
import MobileNavbar from "../MobileNavbar";
import TeamContainer from "./components/TeamContainer";

const TeamPageContainer = (props) => {
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
      <TeamContainer
        team={props.team}
        bio={props.bio}
        prediction={props.prediction}
      />
    </div>
  );
};

export default TeamPageContainer;
