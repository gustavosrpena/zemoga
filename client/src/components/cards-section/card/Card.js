import "./Card.css"
import { VoteBar } from "./vote-bar/VoteBar"
import { useState } from "react"

export const Card = () => {

    const props = {
        vote: {
            good: 15,
            bad: 10
        },
        date: {
            day: 8,
            month: 6
        },
        name: 'Kayne West',
        desc: 'lorem blablablabla',
        category: 'Music',
        img: 'assets/img/pope-francis.png'
    }

    let voteText = 'Vote Now'

    const [votes, setVotes] = useState(props.vote)

    const clickVote = () => {
        
    }

    const clickOption = () => {

    }

    const calcDate = (dateCard) => {
        let newDate = new Date()
        let day = newDate.getDate()
        let month = newDate.getMonth()

        if(dateCard.month === month){
            if (day == dateCard.day) return 'Posted today'
            else return day-dateCard.day + ' days ago'
        }
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
                <span className="votecard__vote-how-old">{calcDate(props.date)} in {props.category}</span>
                <form className="votecard__form" action="#"> 
                    <label className="votecard__form-option">
                        <input type="image" src="assets/img/thumbs-up.svg"/>
                    </label>
                    <label className="votecard__form-option">
                        <input type="image" src="assets/img/thumbs-down.svg"/>
                    </label>
                    <button className="votecard_vote-button" onClick={clickVote}>{voteText}</button>
                </form>
            </div>
            <VoteBar percentage={votes}/>
        </div>
    )
}