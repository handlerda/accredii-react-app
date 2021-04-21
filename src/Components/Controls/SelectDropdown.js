import React from "react";

function SelectDropdown({ name, options, onChange, defaultValue }) {
  return (
    <div>
      <select
        id={name}
        name={name}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-blue-300 focus:outline-none focus:ring-indigo-500 border-indigo-500 sm:text-sm rounded-md bg-gray-100 "
        onChange={onChange}
        defaultValue={defaultValue}
      >
        {options.map((option) => {
          return (
            <option value={option.id}>
              {!option.label ? option.title : option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SelectDropdown;

//!options[0].label ? options[0].title : options[0].label
