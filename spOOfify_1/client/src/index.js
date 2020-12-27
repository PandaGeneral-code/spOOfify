import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import App from "./App";
import GlobalStyle from "./components/GlobalStyle/GlobalStyle";
import { store } from "./utils/store/configureStore";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <Router>
        <ThemeProvider theme={{}}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Router>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
