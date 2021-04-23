import { CheckCircleIcon, OfficeBuildingIcon } from "@heroicons/react/outline";
import React from "react";
import NewButton from "../Controls/NewButton";

function ProfileHeader() {
  return (
    <div className="px-0 sm:px-6 lg:max-w-6xl lg:mx-auto">
      <div className="py-6 md:flex md:items-center md:justify-between ">
        <div className="flex-1 min-w-0">
          {/* Profile */}
          <div className="flex items-center">
            <div>
              <div className="flex items-center">
                <h1 className="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                  Welcome to Accredii, Davis
                </h1>
              </div>
              <dl className="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap md:flex-wrap">
                <dt className="sr-only">Company</dt>
                <dd className="flex items-center text-sm text-gray-500 font-medium capitalize sm:mr-6">
                  <OfficeBuildingIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Add attorney from api
                </dd>
                <dt className="sr-only">Account status</dt>
                <dd className="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                  <CheckCircleIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                    aria-hidden="true"
                  />
                  Verified account
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4 md:flex-wrap">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Create an agreement
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 bg-fixed"
          >
            Invite Investor
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            Invite Company
          </button>
          {/* <NewButton text="Invite company" /> */}
        </div>
      </div>
    </div>
  );
}

export default ProfileHeader;
