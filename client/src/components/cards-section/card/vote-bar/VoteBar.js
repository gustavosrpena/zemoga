import './VoteBar.css'

export const VoteBar = (votes) => {

    let totalVotes = votes.good + votes.bad
    
    let percentage = {
        good: ((votes.good/totalVotes)*100).toFixed(2),
        bad: ((votes.bad/totalVotes)*100).toFixed(2)
    }

    // CSS via JS to be dynamic

    const VotebarGood = {
        height: '100%',
        width: `${percentage.good}%`,
        backgroundColor: 'rgba(60, 187, 180, 0.6)',
        display: 'flex',
        justifyContent: 'left',
        padding: '10px',
        color: '#fff'
    }

    const VotebarBad = {
        height: '100%',
        width: `${percentage.bad}%`,
        backgroundColor: 'rgba(249, 173, 29, 0.6)',
        display: 'flex',
        justifyContent: 'right',
        padding: '10px',
        color: '#fff'
    }
    
    return(
        <div className="votecard__votebar-container">
            <span className="votebar__total">{totalVotes}</span>
            <div className="votebar__good" style={VotebarGood}>
                <img className="votebar__svg thumbsup" src="assets/img/thumbs-up.svg"/>
                {percentage.good}%
            </div>
            <div className="votebar__bad" style={VotebarBad}>
                {percentage.bad}%
                <img className="votebar__svg thumbsdown" src="assets/img/thumbs-down.svg"/>
            </div>
        </div>
    )
}