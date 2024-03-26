import React from 'react'

function PicturePost({ pictures, pictureIndex }) {
    return (
        <div className="picture_counter">
            {pictureIndex + 1}/{pictures.length}
        </div>
    )
}

export default PicturePost
