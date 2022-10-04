import React from "react";
import { Link } from "react-router-dom";

const RankingElement = (props) => {
  const urlName = props.team.toLowerCase();

  return (
    <Link to={`/info/${urlName}`} className="bg-pink-50 hover:bg-pink-100 text-slate-900 border-b-2 border-slate-900 table-row">
      <td className="text-left px-2 py-4">{props.rank}</td>
      <td className="px-2 py-4">
        <img src={props.flag} style={{ width: "30px" }} />
      </td>
      <td className="text-left px-2 py-4">{props.team}</td>
      <td className="text-left px-2 py-4">{props.points}</td>
    </Link>
  );
};

export default RankingElement;
