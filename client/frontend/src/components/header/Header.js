import { Search } from "./search/Search"
import { LoginModal } from "./login-modal/LoginModal"
import { useState } from "react"
import './Header.css'

export const Header = () =>{

    const [openModal, setOpenModal] = useState(false)
    return (
        <header>
            <nav className="nav" role="navigation">
                <div className="max-centered">
                    <h1 className="nav__logo">Rule of thumb.</h1>
                    <button className="nav__hamburger icon-button" alt="Open Menu">
                        <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero"/></svg>
                    </button>
                    <ul className="nav__links">
                        <li>
                            <a href="/">Past Trials</a>
                        </li>
                        <li>
                            <a href="/">How It Works</a>
                        </li>
                        <li>
                            <a href="#" className="open__login" onClick={() => {setOpenModal(true)}}>
                                Login / Sign Up
                            </a>
                        </li>
                        <li>
                           <Search/>
                        </li>
                    </ul>
                    {openModal && <LoginModal closeModal={setOpenModal}/>}
                </div>
            </nav>
        </header>
    )
}