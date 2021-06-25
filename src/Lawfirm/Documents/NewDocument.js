import React, { useEffect, useState } from "react";
import { Form, UseForm } from "../../Components/Form/UseForm";
import FormHeader from "../../Components/Form/FormHeader";
import { NewDocumentDropDown } from "../LawfirmQuestions";
import MultipleChoice from "../../Components/Controls/MultipleChoice";
import SelectDropdown from "../../Components/Controls/SelectDropdown";
import SubmitButton from "../../Components/Controls/SubmitButton";
import { uploadNewForm } from "../../Service/Backend";
import { data } from "autoprefixer";
import Popup from "../../Components/Popup";
import { useHistory } from "react-router";
import Paper from "../../Components/Paper";
import { toBase64 } from "../../Service/FileParsing";
import { useDispatch, useSelector } from "react-redux";
import { getAttorneyInfo } from "../../store/attorney";
import { createNewDocument } from "../../store/document";
import { useAuth0 } from "@auth0/auth0-react";

const initialValues = {};
//loop through the values

NewDocumentDropDown.map((question) => {
  initialValues[question.name] = "";
});
function NewDocument({ id }) {
  const { user, getAccessTokenSilently } = useAuth0();
  const dispatch = useDispatch();
  const history = useHistory();
  const attorneyInfo = useSelector((state) => state.attorney.info);
  console.log(attorneyInfo);
  //set document state
  const [file, setFile] = useState();
  const [submitSuccess, setSuccess] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { values, handleInputChange } = UseForm(initialValues);

  useEffect(() => {
    async function getAttorneyData() {
      const accessToken = await getAccessTokenSilently({
        audience: "https://accredii.com/authorization",
        scope: "attorney:all",
      });
      const data = await dispatch(getAttorneyInfo(id, accessToken));
      setLoaded(true);
      return data;
    }
    getAttorneyData();
  }, [dispatch]);

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
    const accessToken = await getAccessTokenSilently({
      audience: "https://accredii.com/authorization",
      scope: "attorney:all",
    });
    const status = await dispatch(
      createNewDocument(
        values.investors || attorneyInfo.investors[0].id,
        id, // attorney id
        values.companies || attorneyInfo.companies[0].id,
        values.templates || attorneyInfo.templates[0].id,
        accessToken
      )
    );
    if (status === 201) setSuccess(true);
    else setSuccess(false);
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

  if (!loaded) {
    return <h1>loading</h1>;
  }

  if (loaded) {
    return (
      loaded && (
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
            <SubmitButton
              text="Submit"
              onClick={() => console.log(`here comes the log`)}
            />
          </Form>
        </>
      )
    );
  }
}

export default NewDocument;
