import React from "react";
import GlobalStyle from "./style/global";
import Container from "./style/theme";
import RoutesApp from "./routes";

const App = () => {
  return (
    <Container className="dark">
      <RoutesApp />
      <GlobalStyle />
    </Container>
  );
};

export default App;
