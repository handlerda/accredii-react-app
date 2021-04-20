import React, { useState } from "react";
import { Form, UseForm } from "../../Form/UseForm";
import FormHeader from "../../Form/FormHeader";
import { NewCompanyInputs } from "../LawfirmQuestions";
import SubmitButton from "../../Components/Controls/SubmitButton";
import TextInput from "../../Components/Controls/TextInput";
import { createNewCompany, createNewDocument } from "../../Service/Backend";
import NoData from "../../Components/NoData";
import { useHistory } from "react-router";
const initialValues = {};

//loop
NewCompanyInputs.forEach((question) => {
  initialValues[question.name] = "";
});

function NewCompany({ attorney_id, lawfirm_id }) {
  const { values, handleInputChange } = UseForm(initialValues);
  const [submitSuccess, setSubmitSucess] = useState(null);
  const history = useHistory();
  async function handleSubmit(e) {
    e.preventDefault();
    values.attorney_id = attorney_id;
    values.lawfirm_id = lawfirm_id;
    console.log(submitSuccess);
    const data = await createNewCompany(values);
    //this is hard coded for now
    //will set client state to success even if there is an error

    if (data.status === true) {
      setSubmitSucess(true);
    }
  }

  if (submitSuccess === true) {
    return (
      <NoData
        title="The company has been created"
        text="The company has been notified"
        buttonText="Take me back"
        handleClick={() => history.push(`/attorney/documents`)}
      ></NoData>
    );
  } else {
    return (
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <FormHeader
          header="Add a new company"
          body="Please fill out the following information to add a new company."
        />

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
