import React from "react";
import SButton from "./styles";

const Button = ({ text, onClick }) => {
  return (
    <SButton onClick={onClick}>
      <span id="text">{text}</span>
    </SButton>
  );
};

export default Button;
