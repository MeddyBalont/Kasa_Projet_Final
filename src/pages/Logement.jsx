import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Logements from '../data/Logements.json'
import Appearance from '../components/Logement/Apparence'
import Rectangle from '../components/Layout/Rectangle'

function Accommodation() {
    const { id } = useParams()
    const logement = Logements.find((item) => item.id === id)

    return !logement ? (
        <Navigate to="/error" />
    ) : (
        <main>
            <div className="logement_page">
                <div className="logmenent_container">
                    <Appearance
                        title={logement.title}
                        location={logement.location}
                        tags={logement.tags}
                        host={logement.host}
                        rating={logement.rating}
                    />

                    <div className="logement_rectangles rectanges">
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

export default Accommodation
