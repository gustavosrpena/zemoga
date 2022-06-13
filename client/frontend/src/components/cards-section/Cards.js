import "./Cards.css"
import { Banner } from "./banner/Banner";
import { Card } from "./card/Card";
import { ListSelector } from "./list-selector/ListSelector";
import axios from "axios";
import { useEffect } from "react";
import React, { useState }  from "react";

export const Cards = (props) => {
    const [cards, setCards] = React.useState([]);
    const [listType, setListType] = useState('list');

    const fetchData = async() =>{
      const options ={
        url: 'http://localhost:5000',
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8'
        }
      };
      await axios(options)
        .then(response => {
        //   console.log(response.data);
        //   console.log(typeof(response.data))
        //   console.log(response.length)
          setCards(response.data)

          
        });
        // console.log(data)
        // console.log(typeof(data))
        // console.log(data.length)
    }
    React.useEffect(() => {
        fetchData()
    },[])
    // console.log(cards)
    // console.log(typeof(cards))
    // console.log(cards.length)


    
    return (
        <section className="cards">
            <Banner />
            {/* <Card /> */}
            {console.log(cards.length)}
            <ListSelector
                listType = {listType}
                setListType = {setListType}
            />
            <div className={"votecards__container " + listType}>
              {cards.map(card =>{
              console.log(card)
              return  <Card 
                  id = {card._id}
                  name = {card.name}
                  description = {card.description}
                  category = {card.category}
                  picture = {card.picture}
                  date = {card.lastUpdated}
                  votes = {card.votes}
                  positive = {card.votes.positive}
                  negative = {card.votes.negative}
                  listType = {listType}
                  setListType = {setListType}

              />})}
            </div>
        </section>
    )
}