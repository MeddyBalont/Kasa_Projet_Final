import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
    const { id, title, cover } = props.logement
    return (
        <Link className="logement" to={`/logement/${id}`}>
            <span className="background"></span>
            <img className="logement_image" src={`${cover}`} alt={`${title}`} />
            <h2 className="logement_title">{title}</h2>
        </Link>
    )
}

export default Card
