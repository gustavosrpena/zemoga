import { Banner } from "./banner/Banner";
import { Card } from "./card/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper } from 'swiper';
import 'swiper/css';

export const Cards = (props) => {
    const [cards, setCards] = useState([]);
  
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
          setCards(response.data)
        });
    }
    useEffect(() => {
        fetchData()
    },[])

    useEffect(()=>{
      swiperMode()
    }, [])
    
    window.addEventListener('resize', swiperMode)

    const [classCards, setClassCards] = useState('votecard swiper');
    let swiper = null

    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1099px)')

        if(!swiper){
          swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
          })
        }

        if(mobile.matches){
          setClassCards('votecard swiper')
        }

        if(!mobile.matches ){
          console.log('antes do if do swiper', swiper)
          if(swiper){
            swiper.destroy()
            console.log('dentro do if do swiper', swiper)
          }
          setClassCards('votecard')
        }
    }   

    return (
        <section className="cards">
            <Banner />
            <div className={classCards}>
              <div className={classCards+'-wrapper'}>
                {cards.map(card =>{
                return  <Card 
                    name = {card.name}
                    description = {card.description}
                    category = {card.category}
                    picture = {card.picture}
                    date = {card.lastUpdated}
                    votes = {card.votes}
                    positive = {card.votes.positive}
                    negative = {card.votes.negative}
                />})}
              </div>
            </div>
        </section>
    )
}