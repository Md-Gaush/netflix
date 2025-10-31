import axios from 'axios'
import React, { useEffect } from 'react'
import { options } from '../../utilite/utile'
import { useDispatch } from 'react-redux'
import { setTrailerMovies } from '../redux/moviesSlice'

const useMovieById =async (movieId) => {
   const dispatch = useDispatch()
   
   useEffect(()=>{
    const getMoviesById = async()=>{
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos`,options)
       
        const trailer = res?.data?.results?.filter((item)=>{
          return item.type === "Trailer"
        })
       dispatch(setTrailerMovies(trailer.lenght > 0 ? trailer[0] : res.data.results[0]))
     } catch (error) {
       
       
     }
    }
    getMoviesById
   },[])

 
}

export default useMovieById