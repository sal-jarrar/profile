import React, { useState } from "react";
import Header from "./components/Header";
import About from "./sections/About";
import Home from "./sections/Home";

const App = () => {
  const [status, setStatus] = useState(false);
  const toggle = () => setStatus(!status);
  return (
    <>
      <Header status={status} toggle={toggle} />
      <Home status={status} />
      <About />
    </>
  );
};

export default App;
