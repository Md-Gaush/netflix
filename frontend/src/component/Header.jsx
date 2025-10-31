import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import toast from 'react-hot-toast';
import { setToggle } from '../redux/moviesSlice';

const Header = () => {
  const user = useSelector((state)=>state.app.user)
  const toggle = useSelector((state)=>state.movie.toggle)

const dispatch = useDispatch()


// logout
const logoutHandler = async() =>{
   try {
    const res = await axios.get("http://localhost:8080/api/logout")
    if(res.data.success){
      toast.success(res.data.message)
    }
     dispatch(setUser(null))
   } catch (error) {
    console.log(error)
   }
}

const toggleHandler = () =>{
  dispatch(setToggle())
}

  return (
    <div className='flex w-[100%] px-4 items-center justify-between bg-gradient-to-b from-black absolute z-10'>
     <img className='w-50' src='https://cdn.geekwire.com/wp-content/uploads/2014/07/Netflix_Logo_Print_FourColorCMYK.png' alt='netflix-logo'/>
     {
      user && <>
      <div className='flex items-center'>
     <IoIosArrowDropdown size="24px" color='white'/>
        <h1 className='text-lg font-semibold text-white'>{user.name} Mernstack</h1>
        <div className="ml-4">
        <button onClick={logoutHandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
        <button onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle ? "Home" : "Search Movies"}</button>
        </div>
       
     </div>
      </>
     }
     
    </div>
  )
}

export default Header
