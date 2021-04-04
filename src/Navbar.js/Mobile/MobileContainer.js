import React from "react";
import MobileFooter from "./MobileFooter";

function MobileContainer({ children }) {
  return (
    <div
      class="fixed inset-0 flex z-40 md:hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-75"
        aria-hidden="true"
      ></div>
      <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
        <div className="absolute top-0 right-0 -mr-12 pt-2">
          <button className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Close sidebar</span>
            {/* <!-- Heroicon name: outline/x --> */}
            <svg
              className="h-6 w-6 text-white"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
          <div className="flex-shrink-0 flex items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <nav className="mt-5 px-2 space-y-1">{children}</nav>
        </div>
        <MobileFooter name="davis" />
      </div>

      <div className="flex-shrink-0 w-14">
        {/* <!-- Force sidebar to shrink to fit close icon --> */}
      </div>
    </div>
  );
}

export default MobileContainer;
