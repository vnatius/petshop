import React from "react";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Herohead from "./component/Herohead";
import Landpage from "./component/Landingpage";
import Sliderpath from "./component/Sliderpath";
import Partners from "./component/Partners";
import Offers from "./component/Offers";

const App = () => {
  return (
    <>
      <Landpage />
      <Herohead />
      <Sliderpath />
      <Partners />
      <Offers />
    </>
  );
};

export default App;
