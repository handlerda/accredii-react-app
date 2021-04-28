import { useAuth0 } from "@auth0/auth0-react";
import { Menu, Transition } from "@headlessui/react";
import {
  BellIcon,
  ChevronDownIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function Searchbar({ type, name }) {
  console.log(`here is the type, ${type}`);
  const { user } = useAuth0();
  return (
    <div className="flex-1 px-2 flex ">
      <div className="flex-1 flex">
        <form className="w-full flex md:ml-0" action="#" method="GET">
          <label htmlFor="search_field" className="sr-only">
            Search Accredii
          </label>
          <div className="relative w-full text-gray-400 focus-within:text-gray-600 ">
            <div
              className="absolute inset-y-0 left-0 flex items-center pointer-events-none"
              aria-hidden="true"
            >
              <SearchIcon className="h-5 w-5" aria-hidden="true" />
            </div>
            <input
              id="search_field"
              name="search_field"
              className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
              placeholder="Search Accredii"
              type="search"
            />
          </div>
        </form>
      </div>
      <div className="ml-4 flex items-center md:ml-6">
        <button className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
          <span className="sr-only">View notifications</span>
          <BellIcon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Profile dropdown */}
        <Menu as="div" className="ml-3 relative">
          {({ open }) => (
            <>
              <div>
                <Menu.Button className="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50">
                  <span className="hidden ml-3 text-gray-700 text-sm font-medium lg:block">
                    <span className="sr-only">Open user menu for </span>
                    {name}
                  </span>
                  <ChevronDownIcon
                    className="hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  static
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                >
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        href="#"
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Settings
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link
                        to={`/${type}/logout`}
                        className={
                          (active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-sm text-gray-700")
                        }
                      >
                        Logout
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </div>
    </div>
  );
}

export default Searchbar;
