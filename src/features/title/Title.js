import React from 'react'
import { useSelector } from 'react-redux'

import './Title.css'

const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1);
}

const Title = () => {

    const lastSearched = useSelector((state) => state.search.lastSearched)
    const numberOfImagesFound = useSelector((state) => state.search.numberOfImagesFound)

    return (
        <div className="titleWrapper">
            <span className="titleSpan">{capitalize(lastSearched)}</span>
            <span className="numberSpan">{`${numberOfImagesFound} images found`}</span>
        </div>
    )
}

export default Title
