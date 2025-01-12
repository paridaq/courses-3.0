import React from 'react'
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate  = useNavigate();
  
  return (
    <div>
      <div className="bg-gradient-to-r from-white to-green-100 min-h-screen flex flex-col items-center justify-center pt-16">
      <p className="text-lg font-medium text-purple-500 mb-4">Welcome Biswajit Parida to LearnQ</p>
      <h1 className="text-5xl font-bold text-black mb-4">Start Learning from Us</h1>
      
      <p className="text-lg text-center mb-8 text-gray-800">Make your career progression correct. Correct the grammatical errors and build a text.</p>
      <button className="bg-black text-white py-4 px-8 rounded-full mb-4" onClick={() => navigate('/courses')}>Get Started</button>
      <p className="text-center text-gray-700 mb-8">Join thousands of learners and improve your skills with our courses.</p>
      <div className="flex space-x-4">
      <span className="text-black font-bold">React</span>
      <span className="text-black font-bold">Express</span>
      <span className="text-black font-bold">JavaScript</span>
      <span className="text-black font-bold">TypeScript</span>
      <span className="text-black font-bold">C++</span>
      <span className="text-black font-bold">Python</span>
      </div>
      </div>
    </div>
  )
}

export default Home
