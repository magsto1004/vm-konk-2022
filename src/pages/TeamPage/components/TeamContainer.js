import React from "react";
import TeamBio from "./TeamBio";

const TeamContainer = (props) => {
  return (
    <div className="w-[75%] h-screen mx-auto md:mx-0 md:ml-auto p-6 flex flex-wrap bg-[#56042C]">
      <div className="w-[45%] h-[45%] m-4">
        <TeamBio
          team={props.team}
          bio={props.bio}
          prediction={props.prediction}
        />
      </div>
    </div>
  );
};

export default TeamContainer;
