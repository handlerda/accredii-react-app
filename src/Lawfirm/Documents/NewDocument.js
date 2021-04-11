import React, { useState } from "react";
import { Form, UseForm } from "../../Form/UseForm";
import FormHeader from "../../Form/FormHeader";
import { NewDocumentDropDown } from "../LawfirmQuestions";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import { toBase64 } from "../../Service/FileParsing";
import { uploadNewForm } from "../../Service/Backend";

const initialValues = {};
//loop through the values

NewDocumentDropDown.map((question) => {
  initialValues[question.name] = "";
});
function NewDocument() {
  //set document state
  const [file, setFile] = useState();
  const { values, handleInputChange } = UseForm(initialValues);

  //will send the file data as a base64 encoding
  async function newDocument(target) {
    const file = target.target.files[0];
    const base64String = await toBase64(file);
    uploadNewForm(base64String);
    setFile(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <FormHeader
        header="Send a document to an investor"
        body="Please fill out the following information to send a new document to an investor. They will notified once you submit."
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
      <TextInput
        type="file"
        name="new_doc_upload"
        label="Add a new file"
        onChange={newDocument}
        id={"new_doc_upload"}
        hidden={true}
      />
      <SubmitButton
        text="Submit"
        onClick={() => console.log(`here comes the log`)}
      />
    </Form>
  );
}

export default NewDocument;
