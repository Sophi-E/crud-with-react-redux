import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import postReducer from "./reducers/postReducer";

const store = createStore(postReducer);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
