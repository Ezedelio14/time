import React from "react";
import SButton from "./styles";

const Button = ({ text, onClick }) => {
  return <SButton onClick={onClick}>{text}</SButton>;
};

export default Button;
