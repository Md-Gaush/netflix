import React from 'react'
import MovieCard from './MovieCard'

const MoviesList = ({title,movies}) => {
  return (
    <div className='mx-8'>
        <h1 className='text-4xl py-5 text-white'>{title}</h1>
        <div className='flex overflow-x-auto no-scrollbar  cursor-pointer'>
            <div className='flex'>
                {
                    movies?.map((movie)=>{
                        return (
                            <MovieCard key={movie.id} posterPath={movie.poster_path}/>
                        )
                    })
                }
             
               
            </div>
        </div>
    </div>
  )
}

export default MoviesList