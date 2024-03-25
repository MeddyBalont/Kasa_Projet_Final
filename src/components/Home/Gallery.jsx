import React, { useState } from 'react'
import Card from './Card'

function Gallery(props) {
    const [displayCount, setDisplayCount] = useState(6)

    const loadMore = () => {
        setDisplayCount(displayCount + 6)
    }

    return (
        <div>
            <section className="gallery">
                {props.Logements.slice(0, displayCount).map((logement) => (
                    <Card key={logement.id} logement={logement} />
                ))}
            </section>
            <div className="centre">
                {props.Logements.length > displayCount && (
                    <button onClick={loadMore}>Load More</button>
                )}
            </div>
        </div>
    )
}

export default Gallery
