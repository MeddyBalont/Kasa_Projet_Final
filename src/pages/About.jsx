import React from 'react'
import Header from '../components/Layout/Header'
import AboutBanner from '../components/About/AboutBanner'
import Collapses from '../components/Layout/Rectangles'
import Values from '../data/Values.json'

function About() {
    return (
        <section>
            <div className="about">
                <Header />
                <AboutBanner />
                <div className="about_rectangles">
                    <Collapses data={Values} />
                </div>
            </div>
        </section>
    )
}

export default About
