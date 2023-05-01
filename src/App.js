import React from "react";
import GlobalStyle from "./style/global";
import Container from "./style/theme";
import RoutesApp from "./routes";

const App = () => {
  return (
    <Container>
      <RoutesApp />
      <GlobalStyle />
    </Container>
  );
};

export default App;
