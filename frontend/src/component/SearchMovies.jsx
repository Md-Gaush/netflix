import React from 'react'

const SearchMovies = () => {
  return (
    <div className='flex justify-center pt-[10%] w-[100%]'>
        <form className='w-[50%]'>
            <div className='flex justify-between shadow-md border-2 border-gray-200 rounded-full px-4 w-[100%]'>
            <input className='w-full outline-none rounded-md text-2xl p-3' placeholder='Search Here' type='text' />
            <button className='bg-red-800 text-white rounded-md px-4 text-2xl'>Search</button>
            </div>
           
        </form>
    </div>
  )
}

export default SearchMovies