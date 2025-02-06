import react, { useState } from 'react'

const LogIn=()=>{
    const[email,setEmail] = useState<any>('')
    const[password,setPassword] = useState<any>('')
     const handlelogin=(e)=>{

     }

    return (
        <>
        <form onSubmit={handleLogin}></form>
        <label htmlFor="email">email</label>
        <input type="text" value={email || ''} onChange={e=>setEmail(e.target.value)} placeholder='type Email.....'/>
        <label htmlFor="password">password</label>
        <input type="password" value={password || ''} onChange={e=>setPassword(e.target.value)} placeholder='type password...'
         />
         <button type='submit'>LogIn</button>
        </>
    )
}

export default LogIn;