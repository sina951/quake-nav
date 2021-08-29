import React, { useState } from "react"
import { Link } from 'react-router-dom'
import { Navlinks } from './Navlinks'
import logo from './img/quake-logo.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMiniLinks = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className={ isOpen ? "main-nav open" : "main-nav" }>
            <div className="nav-center">
            <div className="main-nav__logo">
            <a href="/" >
                <img src={logo} alt="Home"></img>
            </a>
            </div>

            <ul className="main-nav__links" onClick={toggleMiniLinks}>
                {Navlinks.map((link, index) =>{
                    return (
                        <li key={index} className={link.cName}>
                            <Link to={link.path}>
                                {link.title}
                            </Link>
                        </li>
                    )
                })}
                <div className="toggle-nav__links-redline"></div>
            </ul>

            <div type="button" className={ isOpen ? "toggle-btn open" : "toggle-btn" } onClick={toggleMiniLinks}>
                <div className="toggle-btn__burger"></div>
            </div>

            </div>
      </div>
    )
}

export default Navbar
