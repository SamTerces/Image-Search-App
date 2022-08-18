import React from 'react'

import './Image.css'

const Image = (props) => {
    return (
        <div className="imageWrapper">
            <img
                className="image"
                src={props.src}
                alt={props.alt}
            />
        </div>
    )
}

export default Image
