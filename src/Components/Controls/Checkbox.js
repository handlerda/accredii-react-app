import React from "react";

function Checkbox({ label, name, onChange, value, defaultChecked = false }) {
  // value = typeof value === "boolean" ? value.toString() : value;
  // console.log(`here is the value`, value);
  console.log(label, name, value, defaultChecked);
  return (
    <div class="flex items-center">
      <div class="max-w-lg space-y-4">
        <div class="relative flex items-start">
          <div class="flex items-center h-5">
            <input
              id={name}
              name={name}
              type="radio"
              class="border-gray-300 rounded form-checkbox "
              onChange={onChange}
              defaultChecked={defaultChecked}
              value={value}
            />
            <label
              htmlFor={name}
              class="ml-3 block text-sm font-medium text-gray-700"
            >
              {label}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkbox;
