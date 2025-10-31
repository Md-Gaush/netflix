import React from 'react'
import MoviesList from './MoviesList'
import { useSelector } from 'react-redux'

const MovieContainer = () => {
  const movie = useSelector((state)=>state.movie)
  

  return (
    <div className='bg-black'>
      <div className='-mt-38 relative z-10'>
      <MoviesList title={"Popular Movies"} movies={movie.popularMovies}/>
      <MoviesList title={"Now Playing Movies"} movies={movie.nowPlayingMovie}/>
      <MoviesList title={"Top Rated Movies"} movies={movie.topRatedMovies}/>
      <MoviesList title={"Upcoming Movies"} movies={movie.upcomingMovies}/>
      </div>
     
    </div>
  )
}

export default MovieContainer
