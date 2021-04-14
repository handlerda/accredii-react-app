import React, { useEffect, useState } from "react";
import Checkbox from "../Components/Controls/Checkbox";
import MultipleChoice from "../Components/Controls/MultipleChoice";
import TextInput from "../Components/Controls/TextInput";
import FormHeader from "../Form/FormHeader";
import { UseForm, Form } from "../Form/UseForm";
import { getInvestor, updateInvestor } from "../Service/Backend";
import {
  InvestorMCQuestions,
  InvestorInputQuestions,
} from "./InvestorQuestions";
import axios from "axios";
import SubmitButton from "../Components/Controls/SubmitButton";
function FormTemplate(props) {
  const data = props.data;

  const initialValues = {};

  //loop over all the input questions
  InvestorInputQuestions.forEach((question) => {
    initialValues[question.name] = props.data[question.name] || "";
  });

  //loop over all the multile choice questions
  InvestorMCQuestions.forEach((question) => {
    const questionName = question.choices[0].question_name;
    if (props.data[questionName]) {
      console.log(props.data[questionName]["value"]);
      initialValues[questionName] = props.data[questionName]["value"] || "";
    }
  });

  const { values, handleInputChange } = UseForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    updateInvestor(values);
  }

  console.log(`here is investor info`, values);

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
                  return (
                    <Checkbox
                      label={choice.label}
                      name={choice.question_name}
                      value={choice.value}
                      onChange={handleInputChange}
                      checked={
                        initialValues[choice.question_name] === choice.value
                      }
                    />
                  );
                })}
              </MultipleChoice>
            </div>
          );
        })}
        <SubmitButton
          onClick={() => console.log(`the button was clicked`)}
          text="Save"
        ></SubmitButton>
      </Form>
    )
  );
}

export default FormTemplate;
