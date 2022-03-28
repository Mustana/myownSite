import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Navigation from "./Navigation";
import Masthead from "./Masthead";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Navigation/>
    <Masthead/>
    <Portfolio/>
    <Skills/>
    <Contact/>
    </>
  );
}

export default App;
