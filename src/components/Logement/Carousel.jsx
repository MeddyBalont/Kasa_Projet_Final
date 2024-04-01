import React, { Component } from 'react'
import PictureCounter from './PicturePost'
import arrowLeftImage from '../../images/flèche_gauche.svg'
import arrowRightImage from '../../images/flèche_droite.svg'

class Carousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureIndex: 0,
        }
    }
    handleArrowClick = (direction) => {
        const { pictures } = this.props
        const { pictureIndex } = this.state

        let newPictureIndex
        if (direction === 'previous') {
            newPictureIndex =
                pictureIndex === 0 ? pictures.length - 1 : pictureIndex - 1
        } else if (direction === 'next') {
            newPictureIndex =
                pictureIndex === pictures.length - 1 ? 0 : pictureIndex + 1
        }

        this.setState({ pictureIndex: newPictureIndex })
    }

    render() {
        const { pictures, title } = this.props
        const { pictureIndex } = this.state
        return (
            <section className="carousel">
                {
                    <img
                        src={pictures[pictureIndex]}
                        alt={`${title} ${pictureIndex + 1}`}
                    />
                }
                <PictureCounter
                    pictures={pictures}
                    pictureIndex={pictureIndex}
                />
                {pictures.length > 1 && (
                    <div className="carousel_arrows">
                        <div className="carousel_arrow carousel_arrow_left">
                            <img
                                src={arrowLeftImage}
                                alt="Left_Arrow"
                                onClick={() =>
                                    this.handleArrowClick('previous')
                                }
                            />
                        </div>
                        <div className="carousel_arrow carousel_arrow_right">
                            <img
                                src={arrowRightImage}
                                alt="Right_Arrow"
                                onClick={() => this.handleArrowClick('next')}
                            />
                        </div>
                    </div>
                )}
            </section>
        )
    }
}

export default Carousel
