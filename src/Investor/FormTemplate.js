import React, { useEffect, useState } from "react";
import Checkbox from "../Components/Controls/Checkbox";
import MultipleChoice from "../Components/Controls/MultipleChoice";
import TextInput from "../Components/Controls/TextInput";
import FormHeader from "../Form/FormHeader";
import { UseForm, Form } from "../Form/UseForm";
import { getInvestor } from "../Service/Backend";
import questions from "./InvestorQuestions";
import axios from "axios";
function FormTemplate(props) {
  const [investorInfo, setInvestorInfo] = useState(null);
  const data = props.data;
  console.log(data);

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = UseForm(data, true);

  console.log(`here is investor info`, data);

  return (
    data && (
      <Form className="space-y-8 divide-y divide-gray-200">
        <FormHeader
          header="Personal Investor Information"
          body="Please make sure the following information is up to date. Personal data below will be used to generate accreditation documents "
        />
        <div class="space-y-6 sm:space-y-5">
          <TextInput
            label="First Name"
            name={data.first_name}
            id={data.first_name}
            value={data.first_name}
          />
          <TextInput label="Middle Name" name="middle_name" id="middle_name" />
          <TextInput label="Last Name" name="last_name" id="last_name" />
          <TextInput
            label="Email"
            name="email"
            id="email_name"
            value={data.email}
            onChange={handleInputChange}
          />
          {console.log(values)}
          <TextInput
            label="Phone Number"
            name="phone_number"
            id="phone_number"
          />
          <TextInput
            label="Street address"
            name="street_address"
            id="street_address"
          />
          <TextInput label="City" name="city" id="city" />
          <TextInput label="State" name="state" id="state" />
          <TextInput label="Zip / Postal" name="zip" id="zip" />
        </div>

        <div className="mt-15">
          <FormHeader
            header="Investor Accreditation Details"
            body="Please make sure the following information is up to date. Personal data below will be used to generate accreditation documents "
          />
        </div>
        {questions.map((question) => {
          return (
            <div>
              <MultipleChoice
                title={question.title}
                helpText={question.helpText}
              >
                {question.choices.map((choice) => {
                  return (
                    <Checkbox
                      label={choice.label}
                      name={choice.question_name}
                    />
                  );
                })}
              </MultipleChoice>
            </div>
          );
        })}
        <div class="px-4 py-3  text-right sm:px-6">
          <button
            type="submit"
            class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </Form>
    )
  );
}

export default FormTemplate;
