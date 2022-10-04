import React from "react";
import { Link } from "react-router-dom";

const Td = (props) => {
  const ContentTag = props.to ? Link : "div";
  return (
    <div>
      <td className="text-left px-2 py-4">
        <ContentTag to={props.to}>{props.children}</ContentTag>
      </td>
    </div>
  );
};

export default Td;
