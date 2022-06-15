import "./Submit-Banner.css";

export const SubmitBanner = (props) =>{
    return(
        <div className="submit__banner">
            <div className="submit__banner-content">
                <h3 className="submit__banner-title">Is there anyone else you would want us to add?</h3>
                <button className="submit__banner-btn" onClick={() => {props.setOpenModal(true)}}>Submit a name</button>
            </div>
        </div>
    )
}