import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-[vw] aspect-video absolute text-white pt-[18%] p-12'>
     <h1 className='text-3xl font-bold'>{title}</h1>
     <p className='w-1/3 mt-4'>{overview}</p>
     <div className='mt-8 flex mx-4'>
     <button className='flex items-center px-6 py-2 bg-white text-black rounded-md hover:bg-opacity-80'><FaPlay/>
     <span>Play</span>
     </button>
     <button className='flex items-center mx-2 px-6 py-2 bg-white text-black rounded-md'>
     <CiCircleInfo size="24px"/>
        Watch More</button>
     </div>
    
    </div>
  ) 
}

export default VideoTitle
