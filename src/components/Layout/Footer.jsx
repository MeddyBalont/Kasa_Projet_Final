import React from 'react'
import logo_footer from '../../images/logo_footer_kasa.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="logo">
                <img src={logo_footer} alt="Logo" width="122" height="40" />
            </div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer
