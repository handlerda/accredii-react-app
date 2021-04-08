import React, { useState } from "react";

function UseForm(
  initialFieldValues,
  validateOnChange = false,
  validate = false
) {
  console.log("hello world");
  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    console.log(value);
    setValues({
      ...values,
      [name]: value,
    });
    if (validateOnChange) validate({ [name]: value });
  };

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  };

  return {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  };
}

function Form(props) {
  const { children, ...other } = props;
  return (
    <form autoComplete="off" {...other} {...other}>
      {props.children}
    </form>
  );
}

export { Form, UseForm };
