import React from 'react'
import useMovieById from '../hooks/useMovieById'
import { useSelector } from 'react-redux';

const VideoBackground = ({movieId}) => {

  const trailerMovies = useSelector((state)=>state.movie.trailerMovies)
  useMovieById(movieId);

  return (
    <div className='w-screen'>
      <iframe 
      className='w-screen aspect-video'
      src={`https://www.youtube.com/embed/${trailerMovies}?si=aeHcGwXO5s2lKZPm&mute=1&autoplay=1`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  )
}

export default VideoBackground
 //   width="560" 
    //   height="315" 