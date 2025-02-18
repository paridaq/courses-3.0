import React, { useState } from 'react';

const AdminDashboard = () => {
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<number>();

  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { productName, price };
    try {
      const response = await fetch('http://localhost:8080/api/product/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      if (!response.ok) {
        throw new Error('error in registration');
      }
      console.log(res.newProduct.productName);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-white flex items-center justify-center">
      <div className="p-6 max-w-md mx-auto border border-gray-300 rounded-lg shadow-lg bg-white">
        <h2 className="text-center text-2xl font-bold mb-6">Admin Dashboard</h2>
        <form onSubmit={addProduct} className="flex flex-col gap-4">
          <label htmlFor="Name" className="font-bold">Course Name</label>
          <input
            type="text"
            placeholder="Add course name"
            value={productName || ''}
            onChange={(e) => setProductName(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <label htmlFor="price" className="font-bold">Price</label>
          <input
            type="number"
            placeholder="Add price of the product"
            value={price || ''}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="p-2 border border-gray-300 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

