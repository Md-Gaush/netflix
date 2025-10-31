import axios from 'axios'
import { options, Upcoming } from '../../utilite/utile'
import { useDispatch } from 'react-redux'
import {  getUpcomingMovies } from '../redux/moviesSlice'

const useUpcomingMovies = async() => {
    const dispatch = useDispatch()
    try {
        const res = await axios.get(Upcoming,options)
       
        dispatch( getUpcomingMovies(res.data.results))
    } catch (error) {
        
    }
}

export default useUpcomingMovies 