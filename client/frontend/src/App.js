import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {CardsSection} from "./components/cards-section/CardsSection";
import {Footer} from "./components/footer/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import React from "react";
import './App.css';

function App() {

  return (
    <BrowserRouter className="App">
      <Header/>
      <Hero/>
      <CardsSection/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
