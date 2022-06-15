import "./Submit-Banner.css";

export const SubmitBanner = (props) =>{
    console.log(props)
    return(
        <div className="submit__banner">
            <img className="submit__banner-background" src="assets/img/submit-banner.png" title="" alt=""/>
            <div className="submit__banner-content">
                <h3 className="submit__banner-title">Is there anyone else you would want us to add?</h3>
                <button className="submit__banner-btn" onClick={() => {props.setOpenModal(true)}}>Submit a name</button>
            </div>
        </div>
    )
}