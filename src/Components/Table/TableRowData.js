import React from "react";

function TableRowData({ name, bold }) {
  let cssClass = "px-6 py-4 whitespace-nowrap text-sm text-gray-500";
  cssClass = bold === true ? `${cssClass} font-medium text-gray-900` : cssClass;
  console.log(name);
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
  } else {
    return <td className={cssClass}>{name}</td>;
  }
}

export default TableRowData;
