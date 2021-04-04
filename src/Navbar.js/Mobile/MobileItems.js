import React from "react";

function MobileItems({ label, onClick }) {
  return (
    <button
      className="bg-gray-100 text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md"
      onClick={onClick}
    >
      {/* <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" -->
        <!-- Heroicon name: outline/home --> */}
      <svg
        className="text-gray-500 mr-4 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
      {label}
    </button>
  );
}

export default MobileItems;
