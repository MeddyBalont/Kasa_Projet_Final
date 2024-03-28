import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'

function Header() {
    const [isAccueilActive, setIsAccueilActive] = useState(true)
    const [isAProposActive, setIsAProposActive] = useState(false)

    const handleAccueilClick = () => {
        setIsAccueilActive(true)
        setIsAProposActive(false)
    }

    const handleAProposClick = () => {
        setIsAccueilActive(false)
        setIsAProposActive(true)
    }

    return (
        <header className="header">
            <div className="header_logo">
                <img src={Logo} alt="Logo Kasa" className="header_logo_img" />
            </div>

            <div className="header_nav">
                <ul>
                    <li>
                        <NavLink
                            className={isAccueilActive ? 'active' : ''}
                            to="/"
                            onClick={handleAccueilClick}
                        >
                            ACCEUIL
                        </NavLink>
                        {isAccueilActive && <div className="line"></div>}
                    </li>
                    <li>
                        <NavLink
                            className={isAProposActive ? 'active' : ''}
                            to="/a-propos"
                            onClick={handleAProposClick}
                        >
                            À PROPOS
                        </NavLink>
                        {isAProposActive && <div className="line"></div>}
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
