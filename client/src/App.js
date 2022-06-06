import { Navigation } from "./components/Navigation";
import {Header} from "./components/Header";
import {Hero} from "./components/Hero";
import {Cards} from "./components/Cards";
import {Footer} from "./components/Footer";
import React from "react";
import logo from './logo.svg';
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
      <Navigation/>
      {/* <Header/> */}
      <Hero/>
      <Cards/>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Loading..." : data}
        </p>
        
      </header> */}
    </div>
  );
}
// ReactDOM.render(<App />, document.getElementById("root"));
export default App;
