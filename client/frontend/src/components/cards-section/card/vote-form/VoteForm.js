
// export const VoteForm = (props) =>{
//     const voteSubmit = (e) => {
//         e.preventDefault();
    
//         if (!state.vote) {
//           setState({voteBtnText: "Select an option and vote!",});
//           return;
//         }
    
//         if (state.vote == 'positive'){

//              props.votes.positive += 1
//             }
            
//         else {
//             props.votes.negative += 1
//         }

//         let databody = { "id" :props.id,
//            "votes": props.votes
//         };
//         fetch('http://localhost:5000/send', {
//             method: 'POST',
//             body: JSON.stringify(databody),
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//         })
//         .then(res => res.json())
//         .then(data => console.log(data));

//         // const postData = async() =>{
//         //     const options ={
//         //       url: 'http://localhost:5000/send',
//         //       method: 'post',
//         //       headers: {
//         //         'Accept': 'application/json',
//         //         'Content-Type': 'application/json;charset=UTF-8'
//         //       }
//         //     };
//         //     await axios(options,JSON.stringify(databody))
//         //       .then(response => {
//         //           console.log(response)
//         //       });
//         //   }
//         //   postData();

//         setState({voteBtnText: "Vote Again",});
        
//     };

//     <form className="votecard__form" onSubmit={voteSubmit}> 
//         <input type="radio" id="thumbs-up" name="vote" value="positive" onChange={voteChange}/>
//         <label className="votecard__form-input positive" for="thumbs-up"><img className="votecard__form-svg" src="assets/img/thumbs-up.svg" /></label>
        
//         <input type="radio" id="thumbs-down" name="vote" value="negative" onChange={voteChange}/>
//         <label className="votecard__form-input negative" for="thumbs-down"><img className="votecard__form-svg" src="assets/img/thumbs-down.svg" /></label>
        
//         <button className="votecard_vote-button" type="submit">{state.voteBtnText}</button>
//     </form>
// }