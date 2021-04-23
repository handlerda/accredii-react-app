import React, { useEffect, useState } from "react";
import { Form, UseForm } from "../../Form/UseForm";
import FormHeader from "../../Form/FormHeader";
import { NewDocumentDropDown } from "../LawfirmQuestions";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import { toBase64 } from "../../Service/FileParsing";
import {
  uploadNewForm,
  getAttorneyInfo,
  createNewDocument,
} from "../../Service/Backend";
import { data } from "autoprefixer";

const initialValues = {};
//loop through the values

NewDocumentDropDown.map((question) => {
  initialValues[question.name] = "";
});
function NewDocument({ id }) {
  //set document state
  const [file, setFile] = useState();
  const [attorneyInfo, setAttorneyInfo] = useState(null);
  const { values, handleInputChange } = UseForm(initialValues);

  useEffect(() => {
    async function getAttorneyData() {
      const data = await getAttorneyInfo(id);
      console.log(data);
      setAttorneyInfo(data);
    }
    getAttorneyData();
  }, []);

  //will send the file data as a base64 encoding
  async function newDocument(target) {
    const file = target.target.files[0];
    const base64String = await toBase64(file);
    uploadNewForm(base64String);
    setFile(file);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    const response = await createNewDocument(
      values.investors,
      id,
      attorneyInfo.lawfirm_id,
      values.companies,
      "",
      values.templates
    );
    console.log(response);
  }
  console.log(`attorney info`, attorneyInfo);
  return (
    attorneyInfo && (
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <FormHeader
          header="Send a document to an investor"
          body="Please fill out the following information to send a new document to an investor. They will notified once you submit."
        />

        {NewDocumentDropDown.map((question) => {
          console.log(question);
          switch (question.name) {
            case "investors":
              return (
                <MultipleChoice title={question.label} helpText={question.text}>
                  <SelectDropdown
                    options={attorneyInfo.investors}
                    onChange={handleInputChange}
                    name={question.name}
                  />
                </MultipleChoice>
              );

            case "companies":
              console.log(`here from companies,`, attorneyInfo.companies);
              return (
                <MultipleChoice title={question.label} helpText={question.text}>
                  <SelectDropdown
                    options={attorneyInfo.companies}
                    onChange={handleInputChange}
                    name={question.name}
                  />
                </MultipleChoice>
              );

            case "templates":
              console.log(`here from templates,`, data.templates);
              return (
                <MultipleChoice title={question.label} helpText={question.text}>
                  <SelectDropdown
                    options={attorneyInfo.templates}
                    onChange={handleInputChange}
                    name={question.name}
                  />
                </MultipleChoice>
              );
            default:
              return <div></div>;
          }
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
    )
  );
}

export default NewDocument;
