import React from "react";
import Header from "./layout/Header";
import CurrencyItems from "./components/CurrencyItems";

import "./App.css";

function App() {
  let content = (
    <React.Fragment>
      <Header />
      <CurrencyItems />
    </React.Fragment>
  );
  return content;
}

export default App;
