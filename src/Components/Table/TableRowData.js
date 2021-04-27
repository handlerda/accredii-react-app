import React from "react";
import { Link } from "react-router-dom";

function TableRowData({ name, bold = false, click = false, route }) {
  let cssClass = "px-6 py-4 whitespace-nowrap text-sm text-gray-500";
  console.log(`here is the route`, route);
  cssClass = bold === true ? `${cssClass} font-medium text-gray-900` : cssClass;
  if (name === "completed") name = "Completed";
  if (
    name === "awaiting_investor" ||
    name === "awaiting_lawfirm" ||
    name === "awaiting_company"
  ) {
    const statusSplit = name.split("_");
    statusSplit.map((word) => {
      console.log(word[0].toUpperCase() + word.substring(1));
      return word[0].toUpperCase() + word.substring(1);
    });
    console.log(statusSplit);
    name =
      statusSplit[0][0].toUpperCase() +
      statusSplit[0].substring(1) +
      " " +
      statusSplit[1][0].toUpperCase() +
      statusSplit[1].substring(1);
    return <td className={cssClass}>{name}</td>;
  } else if (click === true) {
    console.log(`hi from the route`);
    console.log(route);
    return (
      <div className={cssClass}>
        <Link to={route}>{name}</Link>
      </div>
    );
  } else {
    return <td className={cssClass}>{name}</td>;
  }
}

export default TableRowData;
