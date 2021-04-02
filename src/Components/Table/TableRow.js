import React from "react";

function TableRow(props) {
  return (
    <tbody class="bg-white divide-y divide-gray-200">
      <tr>{props.children}</tr>
    </tbody>
  );
}

export default TableRow;
