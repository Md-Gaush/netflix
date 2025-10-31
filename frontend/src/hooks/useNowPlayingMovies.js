import axios from "axios";

import { useDispatch } from "react-redux";
import { Now_Playing_movies, options } from "../../utilite/utile";
import { getNowPlayingMovies } from "../redux/moviesSlice";

 const useNowPlayingMovies = async() => {
    const dispatch = useDispatch()
    try {
      const res = await axios.get(Now_Playing_movies,options)
  
     
      dispatch (getNowPlayingMovies(res.data.results))
    } catch (error) {
      console.log(error)
    }
  }

  export default useNowPlayingMovies