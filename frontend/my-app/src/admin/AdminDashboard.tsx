import react, { useState } from 'react'
const AdminDashboard = ()=>{

    const[productName,setProductName] = useState<string>('')
    const[price,setPrice]  = useState<number>()

    const addProduct=async(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      const data = {productName,price}
   try{
      const response = await fetch('http://localhost:8080/api/product/add-product',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

      })
      const res = await response.json()
      if(!response.ok){
        throw new Error('error in registration')
      }
      console.log(res.newProduct.productName)
    }catch(error){
      console.log(error)
    }


    }


    return (
        <>
        <form onSubmit={addProduct}>
        <label htmlFor="Name">Course Name</label>
        <input type="text" placeholder='add course name' value={productName || ''} onChange={(e)=>setProductName(e.target.value)} />
        <label htmlFor="price">Price:</label>
        <input type="number" placeholder='add price of the product' value={price || ''} onChange={(e)=>setPrice(Number(e.target.value))} />
        <button type='submit'>submit</button>
        </form>
        </>
        
    )

}

export default AdminDashboard

