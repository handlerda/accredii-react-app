import React from "react";
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/react/solid";

function StatusGroup({ doc_stats }) {
  const stats = [
    {
      name: "Waiting on investors to sign",
      stat: doc_stats.awaiting_investor,
      previousStat: `${doc_stats.total} total documents`,
    },
    {
      name: "Waiting on companies to sign",
      stat: doc_stats.awaiting_company,
      previousStat: `${doc_stats.total} total documents`,
    },
    {
      name: "Waiting on lawfirm to sign",
      stat: doc_stats.awaiting_lawfirm,
      previousStat: `${doc_stats.total} total documents`,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Agreement dashboard
      </h3>
      <dl className="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x">
        {stats.map((item) => (
          <div key={item.name} className="px-4 py-5 sm:p-6">
            <dt className="text-base font-normal text-gray-900">{item.name}</dt>
            <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
              <div className="flex items-baseline text-2xl font-semibold text-indigo-600">
                {item.stat}
                <span className="ml-2 text-sm font-medium text-gray-500">
                  of {item.previousStat}
                </span>
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default StatusGroup;
