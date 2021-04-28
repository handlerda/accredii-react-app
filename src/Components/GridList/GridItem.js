import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getViewableDocument } from "../../Service/Backend";

//pass in signing status
function GridItem({
  name,
  status,
  title,
  id,
  link_to_left,
  text_to_left,
  text_to_middle,
  link_to_right,
  text_to_right,
  type,
}) {
  const statusClass = status.includes("awaiting")
    ? `flex-shrink-0 inline-block px-2 py-0.5 text-yellow-800 text-xs font-medium bg-yellow-100 rounded-full`
    : `flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full`;
  if (status.includes("awaiting")) {
    const statusSplit = status.split("_");
    statusSplit.map((word) => {
      console.log(word[0].toUpperCase() + word.substring(1));
      return word[0].toUpperCase() + word.substring(1);
    });
    status =
      statusSplit[0][0].toUpperCase() +
      statusSplit[0].substring(1) +
      " " +
      statusSplit[1][0].toUpperCase() +
      statusSplit[1].substring(1);
  } else {
    status = "Completed";
  }

  async function handleS3Link() {
    const link = await getViewableDocument(id);
    window.open(link.url);
  }
  if (status === "Completed") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <Link
                to={link_to_left}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_left}</span>
              </Link>
            </div>
            {id !== null && (
              <div class="-ml-px w-0 flex-1 flex">
                <button
                  onClick={handleS3Link}
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span class="ml-3">{text_to_middle}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Lawfirm" && type === "investor") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <Link
                to={link_to_left}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_left}</span>
              </Link>
            </div>
            {id !== null && (
              <div class="-ml-px w-0 flex-1 flex">
                <button
                  onClick={handleS3Link}
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span class="ml-3">{text_to_middle}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }

  if (status === "Awaiting Lawfirm" && type === "attorney") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <Link
                to={link_to_left}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_left}</span>
              </Link>
            </div>
            {id !== null && (
              <div class="-ml-px w-0 flex-1 flex">
                <button
                  onClick={handleS3Link}
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span class="ml-3">{text_to_middle}</span>
                </button>
              </div>
            )}
            <div class="-ml-px w-0 flex-1 flex">
              <Link
                to={link_to_right}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_right}</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }

  if (status === "Awaiting Investor" && type === "attorney") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <div
                to={"link_to_right"}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">Waiting for investor</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Investor" && type === "investor") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <Link
                to={link_to_right}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_right}</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Investor" && type === "attorney") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <div
                to={"link_to_right"}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">Waiting for investor</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Lawfirm" && type === "investor") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <Link
                to={link_to_right}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_right}</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Investor" && type === "company") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="-ml-px w-0 flex-1 flex">
              <div
                to={"link_to_right"}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">Waiting for Investor to sign</span>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Company" && type === "company") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <Link
                to={link_to_left}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_left}</span>
              </Link>
            </div>
            {id !== null && (
              <div class="-ml-px w-0 flex-1 flex">
                <button
                  onClick={handleS3Link}
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span class="ml-3">{text_to_middle}</span>
                </button>
              </div>
            )}
            <div class="-ml-px w-0 flex-1 flex">
              <Link
                to={link_to_right}
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_right}</span>
              </Link>
            </div>
          </div>
        </div>
      </li>
    );
  }
  if (status === "Awaiting Company" && type === "investor") {
    return (
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">{name}</h3>
              <span class={statusClass}>{status}</span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">{title}</p>
          </div>
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <Link
                to={link_to_left}
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                <span class="ml-3">{text_to_left}</span>
              </Link>
            </div>
            {id !== null && (
              <div class="-ml-px w-0 flex-1 flex">
                <button
                  onClick={handleS3Link}
                  class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <span class="ml-3">{text_to_middle}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </li>
    );
  }
}

export default GridItem;
