import { createSlice } from "@reduxjs/toolkit";


const movieSlice  = createSlice({
    name:"movie",
    initialState:{
        nowPlayingMovie:null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        toggle:false,
        trailerMovies:null,
    },
    reducers:{
        //actions
        getNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovie = action.payload
        },
        getPopularMovies:(state,action)=>{
            state.popularMovies = action.payload
        },
        getTopRatedMovies:(state,action)=>{
            state.topRatedMovies = action.payload
        },
        getUpcomingMovies:(state,action)=>{
            state.upcomingMovies = action.payload
        },
        setToggle:(state)=>{
            state.toggle = !state.toggle
        },
        setTrailerMovies:(state,action)=>{
            state.trailerMovies = action.payload
        },
    }
})
export const {getNowPlayingMovies,getPopularMovies,getTopRatedMovies, getUpcomingMovies,setToggle,setTrailerMovies} = movieSlice.actions
export default movieSlice.reducer;