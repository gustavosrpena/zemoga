import "./Card.css"
import { VoteBar } from "./vote-bar/VoteBar"
import { useState } from "react"

export const Card = () => {

    var props = {
        votes: {
            good: 15,
            bad: 10
        },
        date: {
            day: 3,
            month: 5
        },
        name: 'Kayne West',
        desc: 'lorem blablablabla',
        category: 'Music',
        img: 'assets/img/pope-francis.png'
    }

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
    
        if (state.vote == 'good') props.votes.good += 1
            
        else props.votes.bad += 1

        setState({voteBtnText: "Vote Again",});
        console.log('after', props.votes)
        
    };
    
    const calcDate = (dateCard) => {
        let newDate = new Date()
        let day = newDate.getDate()
        let month = newDate.getMonth()+1

        if(month == dateCard.month){
            if (day == dateCard.day) return 'today'
            else if (day == dateCard.day+1) return 'yesterday'
            else return day-dateCard.day + ' days ago'
        }
        else if (month == dateCard.month+1) return 'last month'
        else return month-dateCard.month + ' months ago'
    }

    return (
        <div className="votecard__container">
            <img className="votecard__background-img" src={props.img} alt={props.name} title={props.name}/>
            
            <div className="votecard__text">
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
            </div>
            
            <div className="votecard__vote-options">
                <span className="votecard__vote-eyebrown-text">{calcDate(props.date)} in {props.category}</span>
                
                <form className="votecard__form" onSubmit={voteSubmit}> 
                    <input type="radio" id="thumbs-up" name="vote" value="good" onChange={voteChange}/>
                    <label className="votecard__form-input good" for="thumbs-up"><img src="assets/img/thumbs-up.svg" /></label>
                    
                    <input type="radio" id="thumbs-down" name="vote" value="bad" onChange={voteChange}/>
                    <label className="votecard__form-input bad" for="thumbs-down"><img src="assets/img/thumbs-down.svg" /></label>
                    
                    <button className="votecard_vote-button" type="submit">{state.voteBtnText}</button>
                </form>

            </div>

            <VoteBar good={props.votes.good} bad={props.votes.bad}/>
        </div>
    )
}