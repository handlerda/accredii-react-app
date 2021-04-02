import React from "react";

function TableHead(props) {
  return (
    <thead class="bg-gray-50">
      <tr>{props.children}</tr>
    </thead>
  );
}

export default TableHead;
