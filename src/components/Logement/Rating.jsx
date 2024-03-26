import React from 'react'
import etoileGrise from '../../images/etoile_grise.svg'
import etoileRouge from '../../images/etoile_rouge.svg'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5]

    return (
        <div>
            {stars.map((star) => (
                <img
                    key={star}
                    src={star <= rating ? etoileRouge : etoileGrise}
                    alt={star <= rating ? 'Étoile rouge' : 'Étoile grise'}
                />
            ))}
        </div>
    )
}

export default Rating