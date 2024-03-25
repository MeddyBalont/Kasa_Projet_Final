import React from 'react'
import HomeBanner from '../components/Home/HomeBanner'
import Gallery from '../components/Home/Gallery'
import Logements from '../data/Logements.json'
import Footer from '../components/Home/Footer'
function Home() {
    return (
        <section>
            <div className="home">
                <HomeBanner />
                <Gallery Logements={Logements} />
                <Footer />
            </div>
        </section>
    )
}

export default Home
