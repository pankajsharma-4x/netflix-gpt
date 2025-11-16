import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        addNowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers:{
        addNowPlayingMovies: (state,action) => {
            state.addNowPlayingMovies = action.payload;
        },
        addCurrentVideoTrailer: (state,action) => {
            state.trailerVideo  = action.payload;
        }
    }
})

export const{addNowPlayingMovies,addCurrentVideoTrailer} = moviesSlice.actions;

export default moviesSlice.reducer;