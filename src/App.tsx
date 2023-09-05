import { useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Main from "./components/Main";
import Statute from "./components/Statute";

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <Main />
      <Statute />
    </>
  );
}

export default App;
