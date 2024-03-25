import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import Gallery from '../components/Home/Gallery'
import Logements from '../data/Logements.json'
import Header from '../components/Layout/Header'

function Home() {
    return (
        <main>
            <div className="home">
                <Header />
                <HomeBanner />
                <Gallery Logements={Logements} />
            </div>
        </main>
    )
}

export default Home
