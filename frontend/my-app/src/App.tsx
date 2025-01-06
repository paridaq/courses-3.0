import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0);
 

  return (
    <>
    <nav className="bg-gradient-to-r from-red-400 to-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-purple-500 text-lg font-bold">My App</div>
      <div className="space-x-4">
        <a href="#" className="text-gray-300 hover:text-black transition-colors duration-300">Home</a>
        <a href="#" className="text-gray-300 hover:text-black transition-colors duration-300">About</a>
        <a href="#" className="text-gray-300 hover:text-black transition-colors duration-300">Contact</a>
      </div>
      </div>
    </nav>
    </>
    
  )
}

export default App
