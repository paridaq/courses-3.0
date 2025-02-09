import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const  navigate = useNavigate();
  const [count,setCount ] = useState<Number>();
  const[isAdmin,setIsAdmin] = useState<boolean>(false)
  



  return (
    <div>
       <nav className="bg-gradient-to-r from-green-400 to-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">LearnQ</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-black"onClick={()=>navigate('/')}>Home</a>
          <a href="#" className="hover:text-black"onClick={()=>navigate('/about')}>About</a>
          <a href="#" className="hover:text-black" onClick={()=>navigate('/dashboard')}>Dashboard</a>
          <a href="#" className="hover:text-black" onClick={()=>navigate('/courses')}>Courses</a>
          <a  className="hover:text-black" onClick={()=>{navigate('/signIn')}}>Sign In</a>
          <a  className="hover:text-black" onClick={()=>{navigate('/login')}}>Log In</a>
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar
