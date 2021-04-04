import React, { useState, useEffect } from "react";

import Checkbox from "./Checkbox";
function MultipleChoice({ title, helpText, children }) {
  return (
    <div class="pt-6 sm:pt-5">
      <div role="group" aria-labelledby="label-notifications">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-baseline">
          <div>
            <div
              class="text-base font-medium text-gray-900 sm:text-sm sm:text-gray-700"
              id="label-notifications"
            >
              {title}
            </div>
          </div>
          <div class="sm:col-span-2">
            <div class="max-w-lg">
              <p class="text-sm text-gray-500">{helpText}</p>
              <div class="mt-4 space-y-4">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MultipleChoice;
