import './VoteBar.css'

export const VoteBar = (votes) => {

    let totalVotes = votes.positive + votes.negative
    
    let percentage = {
        positive: ((votes.positive/totalVotes)*100).toFixed(1),
        negative: ((votes.negative/totalVotes)*100).toFixed(1)
    }

    // CSS via JS to be dynamic

    const Votebarpositive = {
        height: '100%',
        width: `${percentage.positive}%`,
        backgroundColor: 'rgba(60, 187, 180, 0.6)',
        display: 'flex',
        justifyContent: 'left',
        padding: '10px',
        color: '#fff'
    }

    const Votebarnegative = {
        height: '100%',
        width: `${percentage.negative}%`,
        backgroundColor: 'rgba(249, 173, 29, 0.6)',
        display: 'flex',
        justifyContent: 'right',
        padding: '10px',
        color: '#fff'
    }
    
    return(
        <div className="votecard__votebar-container">
            <span className="votebar__total">{totalVotes}</span>
            <div className="votebar__positive" style={Votebarpositive}>
                <img className="votebar__svg thumbsup" src="assets/img/thumbs-up.svg"/>
                {percentage.positive}%
            </div>
            <div className="votebar__negative" style={Votebarnegative}>
                {percentage.negative}%
                <img className="votebar__svg thumbsdown" src="assets/img/thumbs-down.svg"/>
            </div>
        </div>
    )
}