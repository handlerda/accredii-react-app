import React, { useEffect, useState } from "react";
import Checkbox from "../Components/Controls/Checkbox";
import MultipleChoice from "../Components/Controls/MultipleChoice";
import TextInput from "../Components/Controls/TextInput";
import FormHeader from "../Components/Form/FormHeader";
import { UseForm, Form } from "../Components/Form/UseForm";
import {
  InvestorMCQuestions,
  InvestorInputQuestions,
} from "./InvestorQuestions";
import SubmitButton from "../Components/Controls/SubmitButton";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";
import Popup from "../Components/Popup";
import { useDispatch, useSelector } from "react-redux";
import { updateInvestor } from "../store/investor";
function FormTemplate() {
  const { user, getAccessTokenSilently } = useAuth0();
  const history = useHistory();
  const dispatch = useDispatch();

  const [successSubmit, setSuccessSubmit] = useState(null);
  const data = useSelector((state) => state.investor.details);

  const initialValues = {};

  //loop over all the input questions
  InvestorInputQuestions.forEach((question) => {
    initialValues[question.name] = data[question.name] || "";
  });

  //loop over all the multile choice questions
  InvestorMCQuestions.forEach((question) => {
    const questionName = question.choices[0].question_name;
    if (data[questionName]) {
      initialValues[questionName] = data[questionName]["value"] || "";
    }
  });

  const { values, handleInputChange } = UseForm(initialValues);

  async function handleSubmit(e) {
    e.preventDefault();
    const accessToken = await getAccessTokenSilently({
      audience: "https://accredii.com/authorization",
      scope: "investor:all",
    });
    const data = await dispatch(updateInvestor(user.sub, values, accessToken));
    if (data.status === true) {
      setSuccessSubmit(true);
    }
  }

  if (successSubmit === true) {
    return (
      <Popup
        title="Your information has been saved"
        text="You can update specific document information on the document"
        buttonText="Take me to documents"
        handleClick={() => history.push(`/investor/documents`)}
      />
    );
  }
  return (
    data && (
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <FormHeader
          header="Personal Investor Information"
          body="Please make sure the following information is up to date. Personal data below will be used to generate accreditation documents "
        />
        <div class="space-y-6 sm:space-y-5">
          {InvestorInputQuestions.map((question) => {
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

        <div className="mt-15">
          <FormHeader
            header="Investor Accreditation Details"
            body="Please make sure the following information is up to date. Personal data below will be used to generate accreditation documents "
          />
        </div>
        {InvestorMCQuestions.map((question) => {
          return (
            <div>
              <MultipleChoice
                title={question.title}
                helpText={question.helpText}
              >
                {question.choices.map((choice) => {
                  //
                  //

                  return (
                    <Checkbox
                      label={choice.label}
                      name={choice.question_name}
                      value={choice.value}
                      onChange={handleInputChange}
                      defaultChecked={
                        choice.value === data[choice.question_name]["value"]
                          ? true
                          : false
                      }
                    />
                  );
                })}
              </MultipleChoice>
            </div>
          );
        })}
        <SubmitButton text="Save"></SubmitButton>
      </Form>
    )
  );
}

export default FormTemplate;
