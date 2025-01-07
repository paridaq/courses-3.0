import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './homepage/Home';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
 

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
   </Routes>
   <Footer/>
   
   
    </>
    
  )
}

export default App
