import React from "react";
import TextInput from "../Components/Controls/TextInput";
import { Form, UseForm } from "../Components/Form/UseForm";

function NewAttorney() {
  // initial form values values
  const initialValues = {};
  // handle form values
  const { values, handleInputChange } = UseForm(initialValues);

  function handleSubmit(e) {
    console.log(`submited`);
  }

  return (
    <Form
      className="space-y-8 divide-y divide-gray-200"
      onSubmit={handleSubmit}
    >
      <TextInput
        label="First name"
        name="first_name"
        id="first_name"
        onChange={handleInputChange}
      ></TextInput>
      <TextInput
        label="Last name"
        name="last_name"
        id="last_name"
        onChange={handleInputChange}
      ></TextInput>
      <TextInput
        label="Email"
        name="email"
        id="email"
        type="email"
        onChange={handleInputChange}
      ></TextInput>
      <TextInput
        label="Phone number"
        name="phone_number"
        id="phone_number"
        onChange={handleInputChange}
      ></TextInput>
    </Form>
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

export default NewAttorney;
