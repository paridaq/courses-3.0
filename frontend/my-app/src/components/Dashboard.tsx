import React from 'react'

const Dashboard = () => {
  return (
    <div>
        <h1>here is the dashbord component </h1>
        <div className="border border-black p-4 w-full my-2">
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Purchased Product:</strong> React Course</p>
          <p><strong>Date of Purchase:</strong> 2023-12-01</p>
          <p><strong>Amount Paid:</strong> $99.99</p>
          <p><strong>Validity:</strong> 1 Year</p>
        </div>
      
    </div>
  )
}

export default Dashboard

