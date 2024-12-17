import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Post from "./components/Post/Post";

ReactDOM.render(
  <Provider store={store}>
    <Post />
  </Provider>,
  document.getElementById("root")
);
