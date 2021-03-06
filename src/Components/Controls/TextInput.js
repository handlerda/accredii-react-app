import React from "react";

function TextInput({
  label,
  id,
  name,
  value,
  onChange,
  type = "text",
  hidden = false,
}) {
  const className =
    "block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-black-500 rounded-md bg-white border-gray-700";
  return (
    <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5 ">
      <label
        for="first_name"
        class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div class="mt-0 sm:mt-0 sm:col-span-2 border-gray-400">
        <input
          type={type}
          hidden={hidden}
          name={name}
          id={id}
          className={className}
          defaultValue={value || ""}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default TextInput;
