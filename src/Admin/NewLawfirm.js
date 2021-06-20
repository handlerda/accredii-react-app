import React, { useState } from "react";
import TextInput from "../Components/Controls/TextInput";
import { Form, UseForm } from "../Components/Form/UseForm";
import NewAttorney from "./NewAttorney";

function NewLawfirm() {
  // initial form values values
  const [displayAttorneyForm, setDisplayAttorneyForm] = useState(false);
  const initialValues = {};
  // handle form values
  const { values, handleInputChange } = UseForm(initialValues);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`submited`);
  }

  function addAttorney(e) {
    // handle adding attorney
    e.preventDefault();
    setDisplayAttorneyForm(true);
  }
  return (
    <>
      <Form
        className="space-y-8 divide-y divide-gray-200"
        onSubmit={handleSubmit}
      >
        <TextInput
          label="Lawfirm name"
          name="lawfirm-name"
          id="lawfirm-name"
          onChange={handleInputChange}
        ></TextInput>
        <TextInput
          label="Main lawfirm email"
          name="lawfirm-email"
          id="lawfirm-email"
          type="email"
          onChange={handleInputChange}
        ></TextInput>
        <TextInput
          label="Main lawfirm phone number"
          name="lawfirm-phone"
          id="lawfirm-phone"
          type="number"
          onChange={handleInputChange}
        ></TextInput>
        <TextInput
          label="lawfirm address"
          name="lawfirm-address"
          id="lawfirm-address"
          onChange={handleInputChange}
        ></TextInput>
        <button onClick={addAttorney}>Add Attorney</button>
      </Form>
      {displayAttorneyForm && <NewAttorney />}
    </>
  );
}

// name*
// string
// email*
// string
// phone_number*
// string
// address*
// string
// attorneys*

export default NewLawfirm;
