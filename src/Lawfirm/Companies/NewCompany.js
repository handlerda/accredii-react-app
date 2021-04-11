import React, { useState } from "react";
import { Form, UseForm } from "../../Form/UseForm";
import FormHeader from "../../Form/FormHeader";
import { NewCompanyInputs } from "../LawfirmQuestions";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";

const initialValues = {};

//loop
NewCompanyInputs.forEach((question) => {
  initialValues[question.name] = "";
});

function NewCompany() {
  console.log(`hello from new Comapny`);
  const { values, handleInputChange } = UseForm(initialValues);
  console.log(`here come the values`, values);
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <FormHeader
        header="Add a new company"
        body="Please fill out the following information to add a new company."
      />

      <div class="space-y-6 sm:space-y-5">
        {NewCompanyInputs.map((question) => {
          return (
            <TextInput
              label={question.label}
              name={question.name}
              id={question.name}
              value={initialValues[question.name]}
              onChange={handleInputChange}
            />
          );
        })}
      </div>
      <SubmitButton
        text="Submit"
        onClick={() => console.log(`here comes the log`)}
      />
    </Form>
  );
}

export default NewCompany;
