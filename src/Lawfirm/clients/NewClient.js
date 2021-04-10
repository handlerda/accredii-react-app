import React from "react";
import Checkbox from "../../Components/Controls/Checkbox";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import FormHeader from "../../Form/FormHeader";
import { Form, UseForm } from "../../Form/UseForm";
import { insertInvestor } from "../../Service/Backend";
import { NewClientInputs, NewClientDropDown } from "../LawfirmQuestions";

function NewClient({ attorney_id }) {
  const initialValues = {};

  NewClientInputs.forEach((question) => {
    initialValues[question.name] = "";
  });
  NewClientDropDown.forEach((question) => {
    console.log(question.name);
    initialValues[question.name] = "";
  });

  // ON SUBMIT NEEDS TWO API CALLS
  // 1. CREATE USER
  // 2. GENERATE DOCUMENT

  const handleSubmit = (e) => {
    e.preventDefault();
    // create the user
    try {
      // create the new investor
      // -- new user in auth0 & mongo
      const newInvestor = insertInvestor(values, attorney_id);
      // get payload and create a document for the user
    } catch (error) {
      console.log(error);
    }
  };
  const { values, handleInputChange } = UseForm(initialValues);
  console.log(values);
  return (
    <Form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <FormHeader
        header="Add a new investor"
        body="Please fill out the following information to invite a new investor. They will be sent an email to login"
      />

      <div class="space-y-6 sm:space-y-5">
        {NewClientInputs.map((question) => {
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
      {NewClientDropDown.map((question) => {
        return (
          <MultipleChoice title={question.label} helpText={question.text}>
            <SelectDropdown
              options={question.options}
              onChange={handleInputChange}
              name={question.name}
            />
          </MultipleChoice>
        );
      })}
      <SubmitButton
        text="Submit"
        onClick={() => console.log(`here comes the log`)}
      />
    </Form>
  );
}

export default NewClient;
