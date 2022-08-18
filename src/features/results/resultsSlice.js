import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    pageToFetch: 2,
    loadedPages: []
}

const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: {
        increasePageToFetch: (state, action) => {
            state.pageToFetch += 1
        },
        loadMore: (state, action) => {
            state.loadedPages = [...state.loadedPages, action.payload]
        },
        clearLoadedPages: (state, action) => {
            state.pageToFetch = 2
            state.loadedPages = []
        }
    }
});

export const {
    increasePageToFetch,
    loadMore,
    clearLoadedPages
} = resultsSlice.actions
export default resultsSlice.reducer