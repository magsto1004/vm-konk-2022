import React from "react";

const TeamBio = (props) => {
  return (
    <div className="bg-pink-100 rounded-2xl w-full p-4">
      <div>
        <p className="text-2xl font-bold inline p-2">{props.team}</p>
      </div>
      <div>
        <p className="text-lg p-2">
          {props.bio}
        </p>
        <p className="text-xl p-2">
          <a className="font-bold">Konklusjon:</a> {props.prediction}
        </p>
      </div>
    </div>
  );
};

export default TeamBio;
