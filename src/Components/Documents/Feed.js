import React from "react";
import { UserIcon } from "@heroicons/react/solid";
import { CursorClickIcon, PencilAltIcon } from "@heroicons/react/outline";

function Feed({ documentData }) {
  return (
    documentData && (
      <div className="flow-root">
        <ul className="-mb-8">
          {documentData.activity.map((activity, activityIdx) => (
            <li key={activityIdx}>
              <div className="relative pb-8">
                {activityIdx !== documentData.activity.length - 1 ? (
                  <span
                    className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex space-x-3">
                  <div>
                    <span
                      className={
                        "bg-gray-100 h-8 w-8 rounded-full flex items-center justify-center ring-9 ring-white"
                      }
                    >
                      {activity.activity === "created" && (
                        <UserIcon className="h-5 w-5 " aria-hidden="true" />
                      )}
                      {activity.activity === "viewed" && (
                        <CursorClickIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      {activity.activity === "signed" && (
                        <PencilAltIcon
                          className="h-5 w-5"
                          color="black"
                          aria-hidden="true"
                        />
                      )}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                    <div>
                      <p className="text-xs text-gray-500">
                        {activity.party_name.split(" ")[0]}
                        <a
                          href={"/"}
                          className="text-xs font-medium text-gray-900"
                        ></a>
                      </p>
                      <p className="text-xs text-gray-500 font-bold">
                        {activity.activity}
                      </p>
                    </div>
                    <div className="text-right float-right mr-10 text-xs text-gray-500">
                      <time dateTime={activity.time.split("GMT")[0]}>
                        {activity.time.split("GMT")[0]}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  );
}

export default Feed;
