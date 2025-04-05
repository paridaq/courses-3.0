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
import LogIn from './auth/LogIn';
import CheckRoute from './DashboardRoute/CheckRoute';

function App() {
  const [count, setCount] = useState(0);
  const[isAdmin,setIsAdmin] = useState<boolean>(false)
  
 

  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/courses' element={<Course/>}/>
    <Route path='/dashboard' element={<CheckRoute/>}/>
    <Route path='/about'  element={<About/>}/>
    <Route path='/courses' element = {<Course/>}/>
    <Route path='/signIn' element={<SignIn/>}/>
    
    <Route path='/login' element={<LogIn/>}/>
   </Routes>
   <Footer/>
   
   
    </>
    
  )
}

export default App
