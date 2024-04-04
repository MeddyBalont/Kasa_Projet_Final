// La galerie qui gère mes Cards
import React, { useState } from 'react'
import Card from './Card'

//useState qui fait en sorte de ne faire apparaître des groupes de 6 Cards
function Gallery(props) {
    const [displayCount, setDisplayCount] = useState(6)

    const loadMore = () => {
        setDisplayCount(displayCount + 6)
    }

    return (
        <div>
            {/* La map cherche et affiche chaque élément du fichier json*/}
            <section className="gallery">
                {props.Logements.slice(0, displayCount).map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </section>
            {/* Bouton pour faire apparaître 6 card de plus*/}
            <div className="centre">
                {props.Logements.length > displayCount && (
                    <button onClick={loadMore}>Load More</button>
                )}
            </div>
        </div>
    )
}

export default Gallery
