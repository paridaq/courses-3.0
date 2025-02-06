import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const email = localStorage.getItem('email')
  const [details, setDetails] = useState<any>(null);
  console.log(email)

  const fetchDetails = async()=>{
    try {
      const response = await fetch(`http://localhost:8080/api/auth/user-details/${email}`)
      if(response.ok){
       const results = await response.json();
       setDetails(results.details || []);
      }
      console.log(details)
       

    } catch (error) {
      console.log(error)
      
    }};
    useEffect(() => {
      fetchDetails();
    }, [email])
return(
  <>
 {details ? (
  <div>
    <div>
      <h1>{details.name}</h1>
    </div>
    <div>
      <h1>Purchased Product</h1>
      {Array.isArray(details.purchasedProducts) ? (
      <ul>
       {details.purchasedProducts.map((product:any)=>(
        <li key={product._id}>
          <span>{product.productName}</span>
          <span>{product.paidPrice}</span>
          <span>{product.dateOfPurchase}</span>
        </li>
       ))}
      </ul>
      ) : null}
      
    </div>
  </div>
  ) : null}
  </>
)
}

export default Dashboard

