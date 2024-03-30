import React from 'react'
import imgBannerAbout from '../../images/AboutBanner.png'
import Banner from '../Layout/Banner'

function AboutBanner() {
    return (
        <div className="img_banner_about">
            <Banner src={imgBannerAbout} />
        </div>
    )
}
export default AboutBanner
