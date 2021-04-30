import React from "react";

function FormHeader({ header, body }) {
  return (
    <div>
      <h3 class="text-lg leading-6 font-medium mt-7 text-gray-900">{header}</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">{body}</p>
    </div>
  );
}

export default FormHeader;
