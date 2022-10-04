import React from "react";
import Rankings from "./Rankings";
import Odds from "./Odds";

const InfoContainer = () => {
  return (
    <div className="w-[75%] h-screen mx-auto md:mx-0 md:ml-auto p-6 flex flex-wrap bg-[#56042C]">
      <div className="w-[45%] h-[45%] m-4 overflow-y-auto">
        <Rankings />
      </div>
      <div className="w-[45%] h-[45%] m-4 bg-blue-500 ml-auto"></div>
      <div className="w-[100%] h-[45%] m-4 overflow-y-auto mt-auto">
        <Odds />
      </div>
    </div>
  );
};

export default InfoContainer;
