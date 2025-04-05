import axios from 'axios'
import reacct, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn=()=>{
    const[email,setEmail] = useState<string>('')
    const[password,setPassword] = useState<string>('')
    const[name,setName] = useState<string>('')
    const[address,setAddress] = useState<string>('')
    const[phone,setPhone] = useState<number>()
    const navigate = useNavigate();


    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
        const data = {email,password,name,address,phone}
      
      try{
      const res = await fetch('https://courses-3-0-y3ty.vercel.app/api/auth/register',{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      })
      const result = await res.json();

      // console.log(res.status)
      // const result = await axios.post('http://localhost:8080/api/auth/register',{email,name,password,phone,address})
      // const res = result.data
    
      if(!res.ok){
        throw new Error('http error in registration')
      }
      console.log(result.newuser.name)
      navigate('/',{state:{name:result.newuser.name}})
      localStorage.setItem("email",result.newuser.email)

    
      console.log(res);
    }catch(error){
      console.log(error)

    }
    }
    return(
        
        <>
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
            <input type="text" id="name" name="name" required value={name || ''} onChange={(e)=>setName(e.target.value)}className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input type="email" id="email" name="email" required value={email || ''} onChange={(e)=>{setEmail(e.target.value)}} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input type="password" id="password" name="password" required value={password || ''} onChange={(e)=>{setPassword(e.target.value)}}className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
            <input type="text" id="address" name="address" required value={address || ''} onChange={(e)=>{setAddress(e.target.value)}} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
            <label htmlFor="phoneNo" className="block text-sm font-medium text-gray-700">Phone Number:</label>
            <input type="number" id="phoneNo" name="phoneNo" required value={phone || ''} onChange={(e)=>setPhone(Number(e.target.value))} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign Up</button>
            </form>
            <div className="mt-4 space-y-2">
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">Sign in with Google</button>
            <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Sign in with GitHub</button>
            </div>
        </div>
        </>
    )
}
export default SignIn;