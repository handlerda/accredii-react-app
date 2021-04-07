import React from "react";

function GridListContainer({ children }) {
  return (
    <ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
      {children}
    </ul>
  );
}

export default GridListContainer;
