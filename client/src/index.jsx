import React from "react";
import ReactDOM from "react-dom";
import Root from "components/Root";
import "styles/main.scss";
import { Provider } from "react-redux";
import store from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById("root")
);
