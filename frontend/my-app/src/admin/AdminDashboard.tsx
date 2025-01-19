import react, { useState } from 'react'
const AdminDashboard = ()=>{

    const[productName,setProductName] = useState<string>('')
    const[price,setPrice]  = useState<number>()

    const addProduct=async()=>{

    }


    return (
        <>
        <label htmlFor="Name">Course Name</label>
        <input type="text" placeholder='add course name' value={productName || ''} onChange={(e)=>setProductName(e.target.value)} />
        <label htmlFor="price">Price:</label>
        <input type="number" placeholder='add price of the product' value={price || ''} onChange={(e)=>setPrice(Number(e.target.value))} />
        
        </>
        
    )

}

export default AdminDashboard

