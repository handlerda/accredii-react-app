import React from "react";

function Bridge({ color, label }) {
  return (
    <button
      className={`inline-flex items-center mt-3 ml-4 px-3 py-0.5 rounded-full text-sm font-medium bg-${color}-100 text-800`}
    >
      {label}
    </button>
  );
}

export default Bridge;
