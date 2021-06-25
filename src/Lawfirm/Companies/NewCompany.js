import React, { useState } from "react";
import { Form, UseForm } from "../../Components/Form/UseForm";
import FormHeader from "../../Components/Form/FormHeader";
import { NewCompanyInputs } from "../LawfirmQuestions";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import Popup from "../../Components/Popup";
import { useHistory } from "react-router";
import Paper from "../../Components/Paper";
import { useDispatch, useSelector } from "react-redux";
import { createNewCompany } from "../../store/company";
import { useAuth0 } from "@auth0/auth0-react";
const initialValues = {};

//loop
NewCompanyInputs.forEach((question) => {
  initialValues[question.name] = "";
});

function NewCompany({ attorney_id, lawfirm_id }) {
  const { user, getAccessTokenSilently } = useAuth0();
  const { values, handleInputChange } = UseForm(initialValues);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(`this ran`);
    const accessToken = await getAccessTokenSilently({
      audience: "https://accredii.com/authorization",
      scope: "attorney:all",
    });
    values.attorney_id = attorney_id;
    const newCompany = {
      data: values,
    };
    const status = await dispatch(createNewCompany(newCompany, accessToken));
    if (status === 201) {
      setSubmitSuccess(true);
    } else {
      setSubmitSuccess(false);
    }
  }

  if (submitSuccess === false) {
    return (
      <Popup
        title="The company was not able to be created"
        text="Our engineering team is on it"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/documents`)}
      />
    );
  }

  if (submitSuccess === true) {
    return (
      <Popup
        title="The company has been created"
        text="The company has been notified"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/documents`)}
      />
    );
  } else {
    return (
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <Paper>
          <div className="pb-5 mt-5">
            <FormHeader
              header="Add a new company"
              body="Please fill out the following information to add a new company."
            />
          </div>
        </Paper>

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
        <SubmitButton text="Submit" />
      </Form>
    );
  }
}

export default NewCompany;
