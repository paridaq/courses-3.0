import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const email = localStorage.getItem('email')
  const [details, setDetails] = useState<any>(null);

  const fetchdetails = async()=>{
    try {
      const response = await fetch(`http://localhost:8080/api/auth/user_details/${email}`)
      if(response){
       const results = await response.json();
       setDetails(results.details);
      }
       const results = await response.json();

    } catch (error) {
      console.log(error)
      
    }}
    useEffect(() => {
      fetchdetails();
    }, [])
          {details && (
          <div className="border border-black p-4 w-full my-2">
            <p><strong>Name:</strong> {details.name}</p>
        <h1>here is the dashbord component </h1>
        <div className="border border-black p-4 w-full my-2">
          <p><strong>Name:</strong> {details.name}</p>
          <p><strong>Purchased Product:</strong> React Cour</p>
          <p><strong>Date of Purchase:</strong> 2023-12-01</p>
          <p><strong>Amount Paid:</strong> $99.99</p>
          <p><strong>Validity:</strong> 1 Year</p>
        </div>
      
    </div>
  )
}
}

export default Dashboard

