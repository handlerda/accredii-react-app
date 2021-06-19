import { data } from "autoprefixer";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import Popup from "../../Components/Popup";
import Paper from "../../Components/Paper";
import FormHeader from "../../Components/Form/FormHeader";
import { Form, UseForm } from "../../Components/Form/UseForm";

import { NewClientInputs, NewClientDropDown } from "../LawfirmQuestions";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { getAttorneyInfo } from "../../store/attorney";
import { insertInvestor } from "../../store/investor";
import { createNewDocument } from "../../store/document";
function NewClient({ attorney_id, lawfirm_id }) {
  const { user, getAccessTokenWithPopup } = useAuth0();
  const dispatch = useDispatch();
  const documents = useSelector((state) => state.attorney.info);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const [loaded, isLoaded] = useState(false);
  //const dat
  const history = useHistory();
  console.log(history);
  console.log("i ran");
  useEffect(() => {
    async function attorneyInfo() {
      const accessToken = await getAccessTokenWithPopup({
        audience: "https://accredii.com/authorization",
        scope: "attorney:all",
      });
      console.log(accessToken);
      const data = await dispatch(getAttorneyInfo(user.sub, accessToken));
      console.log(data);
      isLoaded(true);
      return data;
    }
    attorneyInfo();
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
    let newInvestor;
    const accessToken = await getAccessTokenWithPopup({
      audience: "https://accredii.com/authorization",
      scope: "attorney:all",
    });
    try {
      newInvestor = await dispatch(
        insertInvestor(values, attorney_id, user.sub, accessToken)
      );
      if (newInvestor.status === false) {
        setSubmitSuccess(false);
      } else {
        console.log(newInvestor);
        const createDocument = await dispatch(
          createNewDocument(
            newInvestor.data.auth0_id,
            attorney_id,
            documentValues["company"] || documents.companies[0].id,
            documentValues["template"] || documents.templates[0].id,
            accessToken
          )
        );
        console.log(`here comes create document`);
        console.log(createDocument);
        if (createDocument === 201) {
          setSubmitSuccess(true);
          console.log(submitSuccess);
        } else setSubmitSuccess(false);
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
      <Popup
        title="The investor was not able to be created"
        text="This is because the investor already exists"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/documents`)}
      />
    );
  }

  if (submitSuccess === true) {
    return (
      <Popup
        title="The investor and document were created"
        text="The investor will be notified via email"
        buttonText="Take me home"
        handleClick={() => history.push(`/attorney/documents`)}
      />
    );
  }
  if (loaded === true) {
    return (
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <div className="pb-5 mt-5 mb-10">
          <FormHeader
            header="Add a new investor"
            body="Please fill out the following information to invite a new investor. They will be sent an email to login"
          />
        </div>

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
    );
  } else {
    return <h1>Hello world</h1>;
  }
}

export default NewClient;
