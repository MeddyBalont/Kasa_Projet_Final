import React, { useState } from 'react'
import Vector from '../../images/Vector.png'

function Rectangle({ title, content }) {
    const [isOpen, setIsOpen] = useState(false)

    const toggleCollapse = () => {
        setIsOpen(!isOpen)
    }

    return (
        <section className="Rectangle">
            <div className="Rectangle_button" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <div
                    className={`arrow-container ${
                        isOpen ? 'arrow-container-up' : ''
                    }`}
                >
                    <img src={Vector} alt="arrow" className="arrow" />
                </div>
            </div>
            {isOpen && <div className="Rectangle_content">{content}</div>}
        </section>
    )
}

export default Rectangle
