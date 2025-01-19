import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './homepage/Home';
import Footer from './components/Footer';
import Course from './components/Course';
import Dashboard from './components/Dashboard';
import About from './components/About';
import SignIn from './auth/SingIn';
import AdminDashboard from './admin/AdminDashboard';

function App() {
  const [count, setCount] = useState(0);
 

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/courses' element={<Course/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/corses' element = {<Course/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    <Route path='/admindashboard'  element={<AdminDashboard/>}/>
   </Routes>
   <Footer/>
   
   
    </>
    
  )
}

export default App
