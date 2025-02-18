import react, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn=()=>{
    const[email,setEmail] = useState<any>('')
    const[password,setPassword] = useState<any>('')
    const navigate=useNavigate();
    type details = {
        email:string;
        password:string;
    }

    const handlelogin = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = {email,password}
        try {
            const response = await fetch('http://localhost:8080/api/auth/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error('faild to login')
            }
            const result = await response.json();
            localStorage.setItem('email',result.user.email)
            navigate('/');

            
        } catch (error) {
            console.log(error)
            
        }

    }

    return (
        <>
        <form onSubmit={handlelogin} className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input 
                type="text" 
                value={email || ''} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="Type Email..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            </div>
            <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input 
                type="password" 
                value={password || ''} 
                onChange={e => setPassword(e.target.value)} 
                placeholder="Type Password..." 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            />
            </div>
            <button 
            type="submit" 
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
            Log In
            </button>
        </form>
        </>
    )
}

export default LogIn;