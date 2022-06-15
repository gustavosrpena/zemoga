import { useState } from "react"
import { VoteBar } from "./vote-bar/VoteBar"
import "./Card.css"

export const Card = (props) => {   
    const day = props.date[8].concat(props.date[9])
    const month = props.date[5].concat(props.date[6])

    const calcDate = (day,month) => {
        let newDate = new Date()
        let newDay = newDate.getDate()
        let newMonth = newDate.getMonth()+1

        if(newMonth === month){
            if (newDay === day) return 'today'
            else if (newDay === day+1) return 'yesterday'
            else return newDay-day + ' days ago'
        }
        else if (newMonth === month+1) return 'last month'
        else return Math.abs(newMonth-month) + ' months ago'
    }

    const [voteState, setVoteState] = useState({
        vote: null,
        voteBtnText: 'Vote Now',
        eyebrownText: `${calcDate(day,month)} in ${props.category}`
    })

    const voteChange = (e) => {
        if(voteState.voteBtnText === 'Vote Now'){
            const vote = e.currentTarget.value
            setVoteState(prevState => ({...prevState, vote: vote}));
        }
        return
    }

    async function voteSubmit(e){
        e.preventDefault();

        if (voteState.vote === null && voteState.voteBtnText === 'Vote Now') {
          setVoteState(prevState => ({
              ...prevState,
              eyebrownText: 'Select an option and vote!'
          }))
          return 
        }

        else if(voteState.voteBtnText === 'Vote Again') {
            setVoteState({
                vote: null,
                voteBtnText: 'Vote Now',
                eyebrownText: `${calcDate(day,month)} in ${props.category}`
            })
            return
        }
    
        if (voteState.vote === 'positive') props.votes.positive += 1
            
        if (voteState.vote === 'negative') props.votes.negative += 1

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

        setVoteState({voteBtnText: "Vote Again", eyebrownText: "Thank you for your vote!"});
    };

    return (
        <div className={"votecard__wrapper swiper-slide swipper-wrapper " + props.listType}>
            <div className={"votecard__content " + props.listType}>
                <img className="votecard__background-img" src={"assets/card-img/"+ props.listType +"/"+props.picture} alt={props.name} title={props.name}/>

                <span className={"votecard__tranparency " + props.listType}></span>

                <div className={"votecard__text " + props.listType}>
                    <h2 className={"votecard__text-name " + props.listType}>{props.name}</h2>
                    <p className={"votecard__text-description " + props.listType}>{props.description}</p>
                </div>

                <div className={"votecard__vote-options "+ props.listType}>
                    <span className="votecard__vote-eyebrown-text">{voteState.eyebrownText}</span>
                    <form className="votecard__form" onSubmit={voteSubmit}> 
                        <input 
                            type="radio" 
                            id={"thumbs-up-" + props.name} 
                            name="vote" 
                            value="positive" 
                            checked={voteState.vote === 'positive'}
                            onChange={voteChange}
                        />
                            
                        <label className="votecard__form-input positive" htmlFor={'thumbs-up-' + props.name}>
                            <img className="votecard__form-svg" src="assets/img/thumbs-up.svg" alt="thumbs-up"/>
                        </label>
                        
                        <input 
                            type="radio" 
                            id={"thumbs-down-" + props.name} 
                            name="vote" 
                            value="negative" 
                            checked={voteState.vote === 'negative'}
                            onChange={voteChange}
                        />

                        <label className="votecard__form-input negative" htmlFor={'thumbs-down-' + props.name}>
                            <img className="votecard__form-svg" src="assets/img/thumbs-down.svg" alt="thumbs-down"/>
                        </label>
                        
                        <button className="votecard_vote-button" type="submit">{voteState.voteBtnText}</button>
                    </form>
                </div>
            </div>
            <VoteBar 
                positive={props.votes.positive} 
                negative={props.votes.negative}
            />
        </div>
    )
}