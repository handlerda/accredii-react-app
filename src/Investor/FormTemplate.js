import React from "react";
import TextInput from "../Components/Controls/TextInput";
import FormHeader from "../Form/FormHeader";
import UseForm from "../Form/UseForm";

function FormTemplate() {
  return (
    <UseForm className="space-y-8 divide-y divide-gray-200">
      <FormHeader
        header="Personal Investor Information"
        body="Please make sure the following information is up to date. Personal data below will be used to generate accreditation documents "
      />
      <div class="space-y-6 sm:space-y-5">
        <TextInput label="First Name" name="first_name" id="first_name" />
        <TextInput label="Middle Name" name="middle_name" id="middle_name" />
        <TextInput label="Last Name" name="last_name" id="last_name" />
        <TextInput label="Email" name="email" id="email_name" />
        <TextInput label="Phone Number" name="phone_number" id="phone_number" />
      </div>
      <div class="mt-4">
        <div class="">
          <div class="text-sm">
            <label for="comments" class="font-medium text-gray-700">
              Comments
            </label>
            <div class="mt-0 sm:mt-0 sm:col-span-2 border-gray-400">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded bg-gray-300 border-gray-900"
              />
            </div>
            <p class="text-gray-500">
              Get notified when someones posts a comment on a posting.
            </p>
          </div>
        </div>
      </div>
    </UseForm>
  );
}

export default FormTemplate;
