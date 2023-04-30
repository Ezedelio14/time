import React from "react";
import GlobalStyle from "./style/global";
import RoutesApp from "./routes";
import Container from "./style/theme";

const App = () => {
  return (
    <Container className="dark">
      <RoutesApp />
      <GlobalStyle />
    </Container>
  );
};

export default App;
