import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'

function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={Logo} alt="Logo Kasa" className="header_logo_img" />
            </div>

            <div className="header_nav">
                <ul>
                    <li>
                        <NavLink className="active" to="/">
                            ACCEUIL
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="active" to="/a-propos">
                            À PROPOS
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
