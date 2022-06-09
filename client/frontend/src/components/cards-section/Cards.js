import { Banner } from "./banner/Banner";
import { Card } from "./card/Card";
import axios from "axios";
import { useEffect } from "react";

export const Cards = (props) => {
    
    // const fetchData = async() =>{
    //     const data = await axios.get('/');
    //     console.log(data)
    //   }
    //   useEffect(()=> {
    //       fetchData()
    //   })
    
    return (
        <section className="cards">
            <Banner />
            <Card />
        </section>
    )
}