import "./Card.css"
import { ListSelector } from "../list-selector/ListSelector";
import { VoteBar } from "./vote-bar/VoteBar"
import {VoteForm} from "./vote-form/VoteForm"
import { useState } from "react"
import React from "react"
import axios from "axios"

export const Card = (props) => {
    // console.log(props.id,"data")
    // console.log(ListSelector.listType)

    const day = props.date[8].concat(props.date[9])
    const month = props.date[5].concat(props.date[6])

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

    async function voteSubmit(e){
        e.preventDefault();
    
        if (!state.vote) {
          setState({voteBtnText: "Select an option and vote!",});
          return;
        }
    
        if (state.vote == 'positive'){
             props.votes.positive += 1
            }
        else {
            props.votes.negative += 1
        }
        console.log(props)
        let databody = {
           "votes": props.votes
        };
        await fetch(`http://localhost:5000/send/${props.id.toString()}`, {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));

        setState({voteBtnText: "Vote Again",});
        
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
            
        <div className={"votecard__wrapper swiper-slide swipper-wrapper " + props.listType}>
            <div className={"votecard__content "+ props.listType}>
                {/* <img className="votecard__background-img" src={"assets/card-img/card/"+props.picture} alt={props.name} title={props.name}/> */}
                <img className="votecard__background-img" src={"assets/card-img/"+ props.listType +"/"+props.picture} alt={props.name} title={props.name}/>

                <span className={"votecard__tranparency "+ props.listType}></span>
                <div className={"votecard__text " + props.listType}>
                    <h2 className={"votecard__text-name " + props.listType}>{props.name}</h2>
                    <p className={"votecard__text-description " + props.listType}>{props.description}</p>
                </div>
                
                <div className={"votecard__vote-options "+ props.listType}>
                    <span className="votecard__vote-eyebrown-text">{calcDate(day,month)} in {props.category}</span>
                    {/* <VoteForm/> */}
                    <form className="votecard__form" onSubmit={voteSubmit}> 
                        <input type="radio" id="thumbs-up" name="vote" value="positive" onChange={voteChange}/>
                        <label className="votecard__form-input positive" for="thumbs-up"><img className="votecard__form-svg" src="assets/img/thumbs-up.svg" /></label>
                        
                        <input type="radio" id="thumbs-down" name="vote" value="negative" onChange={voteChange}/>
                        <label className="votecard__form-input negative" for="thumbs-down"><img className="votecard__form-svg" src="assets/img/thumbs-down.svg" /></label>
                        
                        <button className="votecard_vote-button" type="submit">{state.voteBtnText}</button>
                    </form>

                </div>
            </div>
            <VoteBar positive={props.votes.positive} negative={props.votes.negative}/>
        </div>
    )
}