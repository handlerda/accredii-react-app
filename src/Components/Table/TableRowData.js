import React from "react";

function TableRowData({ name, bold }) {
  let cssClass = "px-6 py-4 whitespace-nowrap text-sm text-gray-500";
  cssClass = bold === true ? `${cssClass} font-medium text-gray-900` : cssClass;
  return <td className={cssClass}>{name}</td>;
}

export default TableRowData;
