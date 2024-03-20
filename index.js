import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import rootReducer from "./redux/reducers/index";
import Counter from "./Counter";

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
