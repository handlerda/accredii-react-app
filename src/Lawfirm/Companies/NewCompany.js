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
const initialValues = {};

//loop
NewCompanyInputs.forEach((question) => {
  initialValues[question.name] = "";
});

function NewCompany({ attorney_id, lawfirm_id }) {
  const { values, handleInputChange } = UseForm(initialValues);
  const [submitSuccess, setSubmitSuccess] = useState(null);
  const history = useHistory();
  const company = useSelector((state) => state.company);
  console.log(company);
  const dispatch = useDispatch();
  async function handleSubmit(e) {
    e.preventDefault();
    values.attorney_id = attorney_id;
    values.lawfirm_id = lawfirm_id;
    console.log(submitSuccess);
    const data = await dispatch(createNewCompany);

    if (data.status === true) {
      setSubmitSuccess(true);
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
        <SubmitButton
          text="Submit"
          onClick={() => console.log(`here comes the log`)}
        />
      </Form>
    );
  }
}

export default NewCompany;
