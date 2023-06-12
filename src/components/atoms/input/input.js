import React, { useState } from "react";
import { InputWrapper } from "./input.styled";

const InputEmail = ({ label, name, type, placeholder }) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isInvalid, setIsInvalid] = useState(null);

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const onChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const emailValidation = () => {
    if (!isValidEmail(enteredEmail)) {
      setIsInvalid("Email is invalid");
    } else {
      setIsInvalid(null);
    }
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
        onBlur={emailValidation}
      />
      {isInvalid && <p>{isInvalid}</p>}
    </InputWrapper>
  );
};

export default InputEmail;
