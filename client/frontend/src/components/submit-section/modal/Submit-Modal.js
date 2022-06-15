import { useState } from "react";
import "./Submit-Modal.css";



export const SubmitModal = (props) =>{

    const [form,setForm] = useState('');

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm(value) 
    }

    async function SubmitCard(e){
        e.preventDefault();
        console.log(form)
        let databody = {
            name: form
         };
         console.log(databody)
        await fetch(`http://localhost:5000/create`, {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(data => console.log(data));
        updateForm('')
    }
    return(
        <div className="submit__modal">
            <span className="modal__closer" onClick={() => props.closeModal(false)}>X</span>
            <div className="submit__modal-container">
                <div><p className="submit__modal-title">Who do you want us to add?</p></div>
                <form onSubmit={SubmitCard} className="submit__modal-form">
                    <input 
                        className="submit__modal-input" 
                        type="text" 
                        placeholder="Name" 
                        onChange={(e) => updateForm(e.target.value)}
                        value={form}
                        required/>
                    <button className="submit__modal-btn" type="submit" >Send</button>
                </form>
            </div>
        </div>
    )
}