import React from "react";

function SelectDropdown({ name, options, onChange }) {
  return (
    <div>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-300 focus:outline-none focus:ring-indigo-500 border-indigo-500 sm:text-sm rounded-md  bg-gray-50 "
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
