import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {Cards} from "./components/cards-section/Cards";
import {SubmitSection} from "./components/submit-section/Submit-Section";
import {Footer} from "./components/footer/Footer";
import { BrowserRouter} from "react-router-dom";
import React from "react";
import './App.css';

function App() {

  return (
    <BrowserRouter className="App">
      <Header/>
      <Hero/>
      <Cards/>
      <SubmitSection/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
