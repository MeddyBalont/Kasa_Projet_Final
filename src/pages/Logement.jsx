import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Header from '../components/Layout/Header'
import Logements from '../data/Logements.json'
import Appearance from '../components/Logement/Appearence'
import Rectangle from '../components/Layout/Rectangle'
import Carousel from '../components/Logement/Carousel'

function Logement() {
    const { id } = useParams()
    const logement = Logements.find((item) => item.id === id)

    return !logement ? (
        <Navigate to="*" />
    ) : (
        <main>
            <div className="logement_page">
                <Header />
                <div className="logmenent_container">
                    <Carousel
                        pictures={logement.pictures}
                        title={logement.title}
                    />
                    <Appearance
                        title={logement.title}
                        location={logement.location}
                        tags={logement.tags}
                        host={logement.host}
                        rating={logement.rating}
                    />

                    <div className="logement_rectangles rectangles">
                        <Rectangle
                            title="Description"
                            content={<p>{logement.description}</p>}
                        />
                        <Rectangle
                            title="Équipements"
                            content={
                                <ul>
                                    {logement.equipments.map((equip, index) => {
                                        return (
                                            <li key={`${index}${equip}`}>
                                                {equip}
                                            </li>
                                        )
                                    })}
                                </ul>
                            }
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Logement
