import React from 'react'
import axios from 'axios'
import { options, Popular_Movie } from '../../utilite/utile'
import { useDispatch } from 'react-redux'
import { getPopularMovies } from '../redux/moviesSlice'




const usePopularMovies = async() => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Popular_Movie,options)
       
        dispatch(getPopularMovies(res.data.results))
    } catch (error) {
        
    }
}

export default usePopularMovies