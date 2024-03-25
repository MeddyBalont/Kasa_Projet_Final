import React from 'react'
import { useParams } from 'react-router-dom'
import Logements from '../data/Logements.json'
import Header from '../'

function Accommodation() {
    const { id } = useParams()
    const logement = Logements.find((item) => item.id === id)

    return !logement ? (
        <Navigate to="/error" />
    ) : (
        <section>
            <div className="logement_page">
                <Header />
                <div className="logmenent_container"></div>
            </div>
        </section>
    )
}

export default Accommodation
