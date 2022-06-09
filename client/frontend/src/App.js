import {Header} from "./components/header/Header";
import {Hero} from "./components/hero/Hero";
import {Cards} from "./components/cards-section/Cards";
import {Footer} from "./components/footer/Footer";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import axios from "axios";
import React from "react";
import './App.css';

function App() {
  const [cards, setCards] = React.useState([]);
  
  const fetchData = async() =>{
    const options ={
      url: 'http://localhost:5000',
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
      }
    };
    axios(options)
      .then(response => {
        console.log(response);
      });
    
    // const {data} = await axios.get('/');
    // console.log(data);
    // setCards(data);
  }
  React.useEffect(() => {
    // fetch("/")
    //   .then((res) => res.json())
    //   .then((cards) => setCards(cards.message));
      fetchData()
  },[])
  console.log(cards)
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
