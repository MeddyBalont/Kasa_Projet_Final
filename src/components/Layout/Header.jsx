import { NavLink } from 'react-router-dom'
import Logo from '../../images/Logo.svg'

function Header() {
    const currentRoute = window.location.pathname
    return (
        <header className="header">
            <div className="header_logo">
                <img src={Logo} alt="Logo Kasa" className="header_logo_img" />
            </div>

            <div className="header_nav">
                <ul className="Nav_list">
                    <li
                        className={
                            currentRoute === '/'
                                ? 'nav_list_item_active'
                                : 'nav_list_item'
                        }
                    >
                        <NavLink to="/">ACCUEIL</NavLink>
                    </li>
                    <li
                        className={
                            currentRoute === '/a-propos'
                                ? 'nav_list_item_active'
                                : 'nav_list_item'
                        }
                    >
                        <NavLink to="/a-propos">A PROPOS</NavLink>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header
