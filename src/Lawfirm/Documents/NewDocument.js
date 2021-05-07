import React, { useEffect, useState } from "react";
import { Form, UseForm } from "../../Components/Form/UseForm";
import FormHeader from "../../Components/Form/FormHeader";
import { NewDocumentDropDown } from "../LawfirmQuestions";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import {
  uploadNewForm,
  getAttorneyInfo,
  createNewDocument,
} from "../../Service/Backend";
import { data } from "autoprefixer";
import Popup from "../../Components/Popup";
import { useHistory } from "react-router";
import Paper from "../../Components/Paper";
import { toBase64 } from "../../Service/FileParsing";
const initialValues = {};
//loop through the values

NewDocumentDropDown.map((question) => {
  initialValues[question.name] = "";
});
function NewDocument({ id }) {
  const history = useHistory();
  //set document state
  const [file, setFile] = useState();
  const [submitSuccess, setSuccess] = useState(null);
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
    //IF VALUES === "" (NOT CLICKED) DEFAULT TO FIRST ID
    const response = await createNewDocument(
      values.investors || attorneyInfo.investors[0].id,
      id,
      attorneyInfo.lawfirm_id,
      values.companies || attorneyInfo.companies[0].id,
      "",
      values.templates || attorneyInfo.templates[0].id
    );
    if (response.status === true) setSuccess(true);
    if (response.status === false) setSuccess(false);
  }

  if (submitSuccess === true) {
    return (
      <Popup
        title="The document has been sent!"
        text="The investor has been notified"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/`)}
      />
    );
  }
  if (submitSuccess === false) {
    return (
      <Popup
        title="There was an error!"
        text="The engineering team has been notified"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/`)}
      />
    );
  }

  console.log(`attorney info`, attorneyInfo);
  return (
    attorneyInfo && (
      <>
        <Form
          className="space-y-8 divide-y divide-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="pb-5 mt-8 mb-10">
            <FormHeader
              header="Send a document to an investor"
              body="Please fill out the following information to send a new document to an investor. They will be notified once you click submit."
            />
          </div>
          {NewDocumentDropDown.map((question) => {
            console.log(question);
            switch (question.name) {
              case "investors":
                return (
                  <MultipleChoice
                    title={question.label}
                    helpText={question.text}
                  >
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
                  <MultipleChoice
                    title={question.label}
                    helpText={question.text}
                  >
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
                  <MultipleChoice
                    title={question.label}
                    helpText={question.text}
                  >
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

          {/* <TextInput
          type="file"
          name="new_doc_upload"
          label="Add a new file"
          onChange={newDocument}
          id={"new_doc_upload"}
          hidden={true}
        /> */}
          <SubmitButton
            text="Submit"
            onClick={() => console.log(`here comes the log`)}
          />
        </Form>
      </>
    )
  );
}

export default NewDocument;
