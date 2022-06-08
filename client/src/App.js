import {Header} from "./components/header/Header";
import {Hero} from "./components/Hero";
import {Cards} from "./components/cards-section/Cards";
import {Footer} from "./components/Footer";
import React from "react";
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  })

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Cards/>
      <Footer/>
    </div>
  );
}
export default App;
