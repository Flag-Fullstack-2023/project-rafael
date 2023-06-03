import React, { useState } from "react";
import { InputWrapper } from "./input.styled";

const InputEmail = ({ label, name, type, placeholder }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onChangeHandler = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEnteredEmail(event.target.value);
  };

  return (
    <InputWrapper>
      <label>{label.charAt(0).toUpperCase() + label.slice(1)}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={enteredEmail}
        onChange={onChangeHandler}
      />
      {error && <p>{error}</p>}
    </InputWrapper>
  );
};

export default InputEmail;
