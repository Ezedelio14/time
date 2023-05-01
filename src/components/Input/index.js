import React from "react";
import SInput from "./styles";

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <SInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
