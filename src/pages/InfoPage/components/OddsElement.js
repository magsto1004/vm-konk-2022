import React from "react";

const OddsElement = (props) => {
  return (
    <tr className="bg-pink-50 text-slate-900 border-b-2 border-slate-900">
      <td className="text-left px-2 py-4">{props.rank}</td>
      <td className="text-left px-2 py-4">{props.team}</td>
      <td className="text-center px-2 py-4">{props.bet365}</td>
      <td className="text-center px-2 py-4">{props.skybet}</td>
      <td className="text-center px-2 py-4">{props.paddypower}</td>
      <td className="text-center px-2 py-4">{props.williamhill}</td>
      <td className="text-center px-2 py-4">{props.sport888}</td>
      <td className="text-center px-2 py-4">{props.betfair}</td>
      <td className="text-center px-2 py-4">{props.betvictor}</td>
      <td className="text-center px-2 py-4">{props.coral}</td>
      <td className="text-center px-2 py-4">{props.unibet}</td>
      <td className="text-center px-2 py-4">{props.spreadex}</td>
    </tr>
  );
};

export default OddsElement;
