import { PaperClipIcon } from "@heroicons/react/outline";

import React from "react";
import { getViewableDocument } from "../../Service/Backend";

function Information({ documentData }) {
  async function handleS3Link() {
    const link = await getViewableDocument(documentData.doc_obj_id);
    window.open(link.url);
  }
  return (
    <section aria-labelledby="applicant-information-title">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h2
            id="applicant-information-title"
            className="text-lg leading-6 font-medium text-gray-900"
          >
            Document Information
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-gray-500"></p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
          <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Company Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.company_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Company Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.company_status}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Attorney Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.attorney_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Attorney Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.attorney_status}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Investor Name
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.investor_name}
              </dd>
            </div>
            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Investor Status
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                {documentData.investor_status}
              </dd>
            </div>

            <div className="sm:col-span-1">
              <dt className="text-sm font-medium text-gray-500">
                Investment amount:
              </dt>
              <dd className="mt-1 text-sm text-gray-900 font-bold">
                {documentData.amount}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">
                Document Questions
              </dt>
              {Object.keys(documentData.required_questions).length === 0 && (
                <dd className="mt-1 text-sm text-gray-900">
                  There are no document questions
                </dd>
              )}
            </div>
            <div className="sm:col-span-2">
              <dt className="text-sm font-medium text-gray-500">Attachments</dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul className="border border-gray-200 rounded-md divide-y divide-gray-200">
                  <li className="pl-3 pr-4 py-3 flex items-center justify-between text-sm">
                    <div className="w-0 flex-1 flex items-center">
                      <PaperClipIcon
                        className="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 flex-1 w-0 truncate">
                        {documentData.title}
                      </span>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <a
                        onClick={handleS3Link}
                        className="font-medium text-blue-600 hover:text-blue-500"
                      >
                        Download
                      </a>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

export default Information;
