import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import NoData from "../../Components/NoData";
import FormHeader from "../../Form/FormHeader";
import { Form, UseForm } from "../../Form/UseForm";
import {
  insertInvestor,
  getAttorneyInfo,
  createNewDocument,
} from "../../Service/Backend";
import { NewClientInputs, NewClientDropDown } from "../LawfirmQuestions";

function NewClient({ attorney_id, lawfirm_id }) {
  const [documents, setDocuments] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const history = useHistory();
  useEffect(() => {
    async function getDocuments() {
      const data = await getAttorneyInfo(attorney_id);
      console.log(data);
      setDocuments(data);
    }
    getDocuments();
  }, []);

  const initialClientValues = {};
  const initialDocumentValues = {};

  NewClientInputs.forEach((question) => {
    initialClientValues[question.name] = "";
  });

  // ON SUBMIT NEEDS TWO API CALLS
  // 1. CREATE USER
  // 2. GENERATE DOCUMENT

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newInvestor = await insertInvestor(
        values,
        attorney_id,
        "auth0|39420394"
      );
      console.log(`ids are coming below:`);
      console.log(documents.companies);
      console.log(documents.templates);
      if (newInvestor.status === false) {
        setSubmitSuccess(false);
      } else {
        const createDocument = await createNewDocument(
          newInvestor.id,
          attorney_id,
          lawfirm_id,
          documentValues["company"] || documents.companies[0].id,
          "",
          documentValues["template"] || documents.templates[0].id
        );
        if (createDocument.status === true) {
          setSubmitSuccess(true);
          console.log(submitSuccess);
        }
        if (createDocument.status === false) {
          return setSubmitSuccess(false);
        }
      }
      // get payload and create a document for the user
    } catch (error) {
      console.log(error);
    }
  };
  const { values, handleInputChange } = UseForm(initialClientValues);
  const {
    values: documentValues,
    handleInputChange: handleDocumentValueChange,
  } = UseForm(initialDocumentValues);

  console.log(values, documentValues);
  if (submitSuccess === false) {
    return (
      <NoData
        title="The investor was not able to be created"
        text="This is because the investor already exists"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/documents`)}
      ></NoData>
    );
  }

  if (submitSuccess === true) {
    return (
      <NoData
        title="The investor and document were created"
        text="The investor will be notified via email"
        buttonText="Take me home"
        handleClick={() => history.push(`/attorney/documents`)}
      />
    );
  } else {
    return (
      documents && (
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
                  value={initialClientValues[question.name]}
                  onChange={handleInputChange}
                />
              );
            })}
          </div>
          {NewClientDropDown.map((question) => {
            if (question.name === "company") {
              return (
                <MultipleChoice title={question.label} helpText={question.text}>
                  <SelectDropdown
                    options={documents.companies}
                    onChange={handleDocumentValueChange}
                    name={question.name}
                    defaultValue={documents.templates[0].id}
                  />
                </MultipleChoice>
              );
            }
            if (question.name === "template")
              return (
                <MultipleChoice title={question.label} helpText={question.text}>
                  <SelectDropdown
                    options={documents.templates}
                    onChange={handleDocumentValueChange}
                    name={question.name}
                    defaultValue={documents.templates[0].id}
                  />
                </MultipleChoice>
              );
          })}
          <SubmitButton
            text="Submit"
            onClick={() => console.log(`here comes the log`)}
          />
        </Form>
      )
    );
  }
}

export default NewClient;
