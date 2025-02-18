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
return (
  <div className="bg-gradient-to-r from-green-400 to-white min-h-screen flex items-center justify-center">
    {details ? (
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-green-700">{details.name}</h1>
        </div>
        <div>
          <h1 className="text-2xl font-semibold text-green-600 mb-4">Purchased Products</h1>
          {Array.isArray(details.purchasedProducts) ? (
            <ul className="space-y-4">
              {details.purchasedProducts.map((product: any) => (
                <li key={product._id} className="flex justify-between items-center bg-green-100 p-4 rounded-lg shadow">
                  <span className="text-lg font-medium text-green-800">{product.productName}</span>
                  <span className="text-lg text-green-600">{product.paidPrice}</span>
                  <span className="text-sm text-green-500">{product.dateOfPurchase}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    ) : null}
  </div>
)
}

export default Dashboard

