import React from "react";
import { Form, UseForm } from "../../Form/UseForm";
import FormHeader from "../../Form/FormHeader";
import { NewDocumentDropDown } from "../LawfirmQuestions";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";

const initialValues = {};
//loop through the values

NewDocumentDropDown.map((question) => {
  initialValues[question.name] = "";
});
function NewDocument() {
  const { values, handleInputChange } = UseForm(initialValues);
  console.log(`here come the values on change`, values);
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <FormHeader
        header="Add a new investor"
        body="Please fill out the following information to invite a new investor. They will be sent an email to login"
      />

      {NewDocumentDropDown.map((question) => {
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

export default NewDocument;
