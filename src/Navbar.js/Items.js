import React from "react";
import { Link } from "react-router-dom";

function Items({ label, link, icon }) {
  return (
    <Link
      className="text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
      to={link}
    >
      {/* <!-- Current: "text-gray-500", Default: "text-gray-400 group-hover:text-gray-500" -->
        <!-- Heroicon name: outline/home --> */}

      <div className="mr-3 mt-3 h-6 w-6">{icon}</div>
      {label}
    </Link>
  );
}

export default Items;
