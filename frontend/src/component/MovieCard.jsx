import React from 'react'
import { Banner_url } from '../../utilite/utile'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-70 pr-2 '>
      <img 
      className="w-100 h-96 object-cover"
      src={`${Banner_url}/${posterPath}`} 
      alt='image'/>
    </div>
  )
}

export default MovieCard