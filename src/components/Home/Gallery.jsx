import Card from './Card'

function Gallery(props) {
    return (
        <section className="gallery">
            {props.Logements.map((logement) => (
                <Card key={logement.id} logement={logement} />
            ))}
        </section>
    )
}

export default Gallery
