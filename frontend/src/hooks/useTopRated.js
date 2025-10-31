import React from 'react'
import axios from 'axios'
import { options, Top_Rated  } from '../../utilite/utile'
import { useDispatch } from 'react-redux'
import { getTopRatedMovies } from '../redux/moviesSlice'

const useTopRated = async() => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Top_Rated ,options)
       
        dispatch(getTopRatedMovies(res.data.results))
    } catch (error) {
        
    }
}

export default useTopRated