import React, { Component } from 'react'

// Composant de classe Tag
class Tag extends Component {
    constructor(props) {
        super(props)
        // Initialise le state pour stocker le tag
        this.state = {}
    }

    render() {
        const { tag } = this.props
        return (
            <div className="tag">
                {/* Affiche le tag en utilisant la valeur du state */}
                <h3>{tag}</h3>
            </div>
        )
    }
}

export default Tag
