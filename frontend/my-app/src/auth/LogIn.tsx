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
        <form onSubmit={handlelogin}>
        <label htmlFor="email">email</label>
        <input type="text" value={email || ''} onChange={e=>setEmail(e.target.value)} placeholder='type Email.....'/>
        <label htmlFor="password">password</label>
        <input type="password" value={password || ''} onChange={e=>setPassword(e.target.value)} placeholder='type password...'
         />
         <button type='submit'>LogIn</button>
         </form>
        </>
    )
}

export default LogIn;