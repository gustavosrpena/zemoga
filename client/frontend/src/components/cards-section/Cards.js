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

    useEffect(() => {
      window.addEventListener('resize', function() {
        swiperMode()
      })
    })

    var init = false
    var swiper = Swiper
    var classNameCards = 'votecard'

    function swiperMode() {
        let mobile = window.matchMedia('(min-width: 0px) and (max-width: 1099px)');

        if(mobile.matches) {
            if (!init) {
                init = true
                classNameCards += ' swiper'
                const swiper = new Swiper('.swiper', {
                  direction: 'horizontal',
                  loop: true,
                })
            }
        }

        else if(!mobile.matches && init){
          swiper.destroy(true,true)
          init = false
          classNameCards = 'votecard'
        }
    }   

    return (
        <section className="cards">
            <Banner />
            {swiperMode()}
            <div className={classNameCards}>
              <div className={classNameCards+'-wrapper'}>
                {cards.map(card =>{
                console.log(card)
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