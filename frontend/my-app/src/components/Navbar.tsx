import React from 'react'

const Navbar = () => {
  return (
    <div>
       <nav className="bg-gradient-to-r from-green-400 to-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">LearnQ</div>
        <div className="space-x-4">
          <a href="#" className="hover:text-black">Home</a>
          <a href="#" className="hover:text-black">About</a>
          <a href="#" className="hover:text-black">Dashboard</a>
          <a href="#" className="hover:text-black">Sign In</a>
          <a href="#" className="hover:text-black">Sign Up</a>
        </div>
      </div>
    </nav>



      
    </div>
  )
}

export default Navbar
