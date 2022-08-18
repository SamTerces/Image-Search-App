import React, { useState } from 'react'
import { Row, Col, Button, Form, FormControl, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { setInput, setImages, setNumberOfImagesFound, setLastSearched } from './searchSlice'
import fetchImages from './searchAPI'
import { clearLoadedPages } from '../results/resultsSlice'

import './Search.css'

const Search = () => {

    const dispatch = useDispatch()

    const input = useSelector((state) => state.search.input)
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        dispatch(setInput({ input: e.target.value }))
    }

    const handleSearchClick = async (e) => {
        e.preventDefault()
        setLoading(true)
        dispatch(clearLoadedPages())
        if (input !== "") {
            dispatch(setLastSearched({ lastSearched: input }))
            fetchImages(input, 1)
                .then((data) => {
                    setLoading(false)
                    dispatch(setNumberOfImagesFound({ numberOfImagesFound: data.total }))
                    dispatch(setImages({ images: data.results }))
                })
        }
        else {
            // Random Image Request
            dispatch(setLastSearched({ lastSearched: "random" }))
            fetchImages("random", 1)
                .then((data) => {
                    setLoading(false)
                    dispatch(setNumberOfImagesFound({ numberOfImagesFound: data.total }))
                    dispatch(setImages({ images: data.results }))
                })
        }
    }

    return (
        <Row className="search">
            <Col xs={8} sm={9} md={true} className="searchBarCol">
                <Form onSubmit={handleSearchClick}>
                    <FormControl
                        className="searchBar"
                        placeholder="Search for photos"
                        aria-label="Search for photos"
                        value={input}
                        onChange={handleInputChange}
                    />
                </Form>
            </Col>
            <Col xs={4} sm={3} md="auto">
                <Button
                    variant="dark"
                    className="searchButton center"
                    disabled={loading}
                    onClick={!loading ? handleSearchClick : null}
                >
                    {!loading
                        ? (<i className="bi bi-search iconFontSize"></i>)
                        : (<Spinner animation="border" variant="light" />)
                    }
                </Button>
            </Col>
        </Row>
    )
}

export default Search
