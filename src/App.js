import React from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <Meals></Meals>
    </React.Fragment>
  );
}

export default App;
