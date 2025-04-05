import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminDashboard = () => {
  const [productName, setProductName] = useState<string>('');
  const [price, setPrice] = useState<number>();
  const navigate = useNavigate();

  const addProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { productName, price };
    try {
      const response = await fetch('https://courses-3-0-y3ty.vercel.app/api/product/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const res = await response.json();
        navigate('/')
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
      <div className="p-10 max-w-2xl w-full mx-auto border border-gray-300 rounded-lg shadow-2xl bg-white">
      <h2 className="text-center text-3xl font-bold mb-8">Admin Dashboard</h2>
      <form onSubmit={addProduct} className="flex flex-col gap-6">
        <label htmlFor="Name" className="font-bold text-lg">Course Name</label>
        <input
        type="text"
        placeholder="Add course name"
        value={productName || ''}
        onChange={(e) => setProductName(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg"
        />
        <label htmlFor="price" className="font-bold text-lg">Price</label>
        <input
        type="number"
        placeholder="Add price of the product"
        value={price || ''}
        onChange={(e) => setPrice(Number(e.target.value))}
        className="p-3 border border-gray-300 rounded-lg"
        />
        <button type="submit" className="p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Add Product</button>
      </form>
      </div>
    </div>
  );
};

export default AdminDashboard;

