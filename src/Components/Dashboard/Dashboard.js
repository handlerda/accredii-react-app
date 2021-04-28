import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";

import {
  BellIcon,
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  HomeIcon,
  MenuAlt1Icon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/react/solid";
import ProfileHeader from "./ProfileHeader";
import StatusGroup from "./StatusGroup";
import Report from "../Portal/Report";
import { getDocuments } from "../../Service/Backend";
import NoData from "../NoData";

const tableHeaders = [
  { name: "Title" },
  { name: "Company" },
  { name: "Law Firm" },
  { name: "Client" },
  { name: "Status" },
];

const api_names = [
  "title",
  "company_name",
  "lawfirm_name",
  "investor_name",
  "status",

  "doc_obj_id",
];

export default function Dashboard({ user_id, type }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [documentStatus, setDocumentStatus] = useState(null);
  useEffect(() => {
    const getStatus = async () => {
      const data = await getDocuments(type, user_id);
      console.log(data);
      if (data.data.stats.total === 0) setDocumentStatus(false);
      else setDocumentStatus(data);
    };
    getStatus();
  }, []);

  if (documentStatus !== false) {
    return (
      documentStatus && (
        <div className="h-screen">
          <Transition.Root show={sidebarOpen} as={Fragment}>
            <Dialog
              as="div"
              static
              className="fixed inset-0 flex z-40 lg:hidden"
              open={sidebarOpen}
              onClose={setSidebarOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
              </Transition.Child>
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                      alt="Easywire logo"
                    />
                  </div>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </Dialog>
          </Transition.Root>

          <div className="flex-1  focus:outline-none">
            <main className="flex-1 relative pb-8 z-0 overflow-y-auto">
              {/* Page header */}

              <ProfileHeader
                type={type}
                name={documentStatus.name}
                lawfirm_name={
                  type === "attorney" ? documentStatus.lawfirm_name : false
                }
              />

              <div className="mt-2">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  {/* Card */}
                  {documentStatus.data.stats.total > 0 && (
                    <StatusGroup doc_stats={documentStatus.data.stats} />
                  )}
                  {documentStatus.data.stats.total === 0 && (
                    <h1>Add better css for no docs / new user</h1>
                  )}
                </div>

                <h2 className="max-w-6xl mx-auto mt-8 px- text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8 mb-8">
                  All documents
                </h2>

                {/* Activity list (smallest breakpoint only) */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <Report
                    tableHeaders={tableHeaders}
                    type={type}
                    id={user_id}
                    keys={api_names}
                    content="docs"
                  />
                </div>
              </div>
            </main>
          </div>
        </div>
      )
    );
  } else {
    return (
      <NoData
        title="Looks like you are new"
        text="Create a document or wait to get added to a subscription"
        buttonText="Click me"
      ></NoData>
    );
  }
}

// import React, { useEffect, useState } from "react";
// import { getDocuments } from "../../Service/Backend";
// import Piechart from "./Piechart";

// function Dashboard({ type, id }) {
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     const getStatus = async () => {
//       const data = await getDocuments(type, id);
//       if (data.data.docs.length) setData(data.data);
//       else setData(false);
//     };
//     getStatus();
//   }, []);
//   console.log(data);
//   const generalStats = [];
//   if (data !== null) {
//     console.log(`we made it`);
//     generalStats.push({
//       name: "awaiting_company",
//       value: data.stats.awaiting_company,
//     });
//     generalStats.push({
//       name: "awaiting_investor",
//       value: data.stats.awaiting_investor,
//     });
//     generalStats.push({
//       name: "awaiting_lawfirm",
//       value: data.stats.awaiting_lawfirm,
//     });
//     generalStats.push({
//       name: "completed",
//       value: data.stats.completed,
//     });
//     generalStats.push({
//       name: "total",
//       value: data.stats.total,
//     });
//   }
//   if (!data) {
//     return <h1>loading</h1>;
//   }
//   return data && <Piechart formattedData={generalStats} key="value" />;

//   //   return <Piechart data={data} key />;
// }

// export default Dashboard;