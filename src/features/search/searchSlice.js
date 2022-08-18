import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    input: "",
    images: [],
    numberOfImagesFound: 0,
    lastSearched: "random"
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setInput: (state, action) => {
            state.input = action.payload.input
        },
        setImages: (state, action) => {
            state.images = [...action.payload.images]
        },
        setNumberOfImagesFound: (state, action) => {
            state.numberOfImagesFound = action.payload.numberOfImagesFound
        },
        setLastSearched: (state, action) => {
            state.lastSearched = action.payload.lastSearched
        }
    },
});

export const {
    setInput,
    setImages,
    setNumberOfImagesFound,
    setLastSearched
} = searchSlice.actions
export default searchSlice.reducer