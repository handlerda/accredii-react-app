import React from "react";

function SelectDropdown({ name, options, onChange }) {
  return (
    <div>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        onChange={onChange}
      >
        {options.map((option) => {
          return <option>{option.label}</option>;
        })}
      </select>
    </div>
  );
}

export default SelectDropdown;
