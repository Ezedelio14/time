import React, { useContext } from "react";
import GlobalStyle from "./style/global";
import Container from "./style/theme";
import RoutesApp from "./routes";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeContext } from "./contexts/theme";

const App = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <Container className={changeTheme ? "dark" : "light"}>
      <ThemeBtn />
      <RoutesApp />
      <GlobalStyle />
    </Container>
  );
};

export default App;
