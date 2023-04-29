import React, { Fragment } from "react";
import GlobalStyle from "./style/global";
import RoutesApp from "./routes";

const App = () => {
  return (
    <>
      <RoutesApp />
      <GlobalStyle />
    </>
  );
};

export default App;
