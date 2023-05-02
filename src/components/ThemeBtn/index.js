import React, { useContext } from "react";
import Container from "./styles";
import { ThemeContext } from "../../contexts/theme";

const ThemeBtn = () => {
  const { changeTheme, setChangeTheme } = useContext(ThemeContext);
  const handleThemeChange = () => {
    if (changeTheme) {
      setChangeTheme(false);
    } else {
      setChangeTheme(true);
    }
  };

  return <Container onClick={handleThemeChange}>change theme</Container>;
};

export default ThemeBtn;
