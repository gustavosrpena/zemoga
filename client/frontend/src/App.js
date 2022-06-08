import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {Cards} from "./components/Cards";
import {Footer} from "./components/footer/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);
  
  const fetchData = async() =>{
    const data = await axios.get('/api');
    console.log(data)
  }
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  })

  return (
    <BrowserRouter className="App">
      <Header/>
      <Hero/>
      {/* <Routes/>
      <Route path="/" component = {Cards} exact/>
      <Routes/> */}
      <Cards/>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
