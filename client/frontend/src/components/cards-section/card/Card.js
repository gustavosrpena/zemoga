import "./Card.css"
import { VoteBar } from "./vote-bar/VoteBar"
import { useState } from "react"
import React from "react"
import axios from "axios"

export const Card = (props) => {
    console.log(props.id,"data")
    // console.log(props.date.day,"data")
    // props.picture = 
    const day = props.date[8].concat(props.date[9])
    const month = props.date[5].concat(props.date[6])
    // props.date = {day,month}

    // // props.date.day = props.date.getDay()
    // // props.date.month = props.month.getMonth()

    // var props = {
    //     votes: {
    //         positive: 15,
    //         negative: 10
    //     },
    //     date: {
    //         day: 3,
    //         month: 5
    //     },
    //     name: 'Kayne West',
    //     desc: 'lorem blablablabla',
    //     category: 'Music',
    //     img: 'assets/img/pope-francis.png'
    // }



    const voteState = {
        vote: '',
        card: `${props.name}`,
        voteBtnText: 'Vote Now'
    }

    const [state, setState] = useState(voteState)

    const voteChange = (e) => {
        const vote = e.currentTarget.value;
        setState((prev) => ({ ...prev, vote }));
    };

    const voteSubmit = (e) => {
        e.preventDefault();
    
        if (!state.vote) {
          setState({voteBtnText: "Select an option and vote!",});
          return;
        }
        console.log('before', props.votes)
    
        if (state.vote == 'positive'){

             props.votes.positive += 1
            }
            
        else {
            props.votes.negative += 1
        }

        let databody = { "id" :props.id,
           "votes": props.votes
        };
        fetch('http://localhost:5000/send', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));

        // const postData = async() =>{
        //     const options ={
        //       url: 'http://localhost:5000/send',
        //       method: 'post',
        //       headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json;charset=UTF-8'
        //       }
        //     };
        //     await axios(options,JSON.stringify(databody))
        //       .then(response => {
        //           console.log(response)
        //       });
        //   }
        //   postData();

        setState({voteBtnText: "Vote Again",});
        console.log('after', props.votes)
        
    };
    
    const calcDate = (day,month) => {
        let newDate = new Date()
        let newDay = newDate.getDate()
        let newMonth = newDate.getMonth()+1

        if(newMonth == month){
            if (newDay == day) return 'today'
            else if (newDay == day+1) return 'yesterday'
            else return newDay-day + ' days ago'
        }
        else if (newMonth == month+1) return 'last month'
        else return newMonth-month + ' months ago'
    }

    return (
        <div className="votecard__container">
            <img className="votecard__background-img" src={"assets/card-img/card/"+props.picture} alt={props.name} title={props.name}/>
            
            <div className="votecard__text">
                <h2>{props.name}</h2>
                <p>{props.description}</p>
            </div>
            
            <div className="votecard__vote-options">
                <span className="votecard__vote-eyebrown-text">{calcDate(day,month)} in {props.category}</span>
                
                <form className="votecard__form" onSubmit={voteSubmit}> 
                    <input type="radio" id="thumbs-up" name="vote" value="positive" onChange={voteChange}/>
                    <label className="votecard__form-input positive" for="thumbs-up"><img src="assets/img/thumbs-up.svg" /></label>
                    
                    <input type="radio" id="thumbs-down" name="vote" value="negative" onChange={voteChange}/>
                    <label className="votecard__form-input negative" for="thumbs-down"><img src="assets/img/thumbs-down.svg" /></label>
                    
                    <button className="votecard_vote-button" type="submit">{state.voteBtnText}</button>
                </form>

            </div>

            <VoteBar positive={props.votes.positive} negative={props.votes.negative}/>
        </div>
    )
}