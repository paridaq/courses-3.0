
        import React from 'react';
        import {useState,useEffect} from 'react'
import { useUser } from '../Context/AuthContext';
        type Product={
            _id:string;
            productName:string;
            price:number;

        }

        declare global {
            interface Window {
                Razorpay: any;
            }
        }
        

        const Course = () => {
            const[products,setProducts] = useState<Product[]>([]);
            const[loading,setLoading] = useState<boolean>(true);
            const[error,setError] = useState<string | null>(null)
            //| is bitwise or in javascript
            //|| is logical error in javascript
            const email = localStorage.getItem('email')
            const fetchProducts = async()=>{
                // In the fetch api the default method is GET mefod so there  is no need to add method in fetch
                try{
                const response = await fetch('http://localhost:8080/api/product/get-products')
                const result = await response.json();
                setProducts(result.Products);
                setLoading(false)
                }catch(error){
                   // console.log(error);
                    setError((error as Error).message)
                    setLoading(false)
                }
            }
            useEffect(()=>{
                fetchProducts();
            },[]);

                if(loading){
                   return <div>Loading ...</div> 
                }
                if(error){
                    return <div>Error:{error}</div>
                }
                const loadRazorpayScript = ()=>{
                    return new Promise((resolve)=>{
                        const script = document.createElement('script')
                        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
                        script.onload=()=>resolve(true);
                        script.onerror=()=>resolve(false);
                        document.body.appendChild(script);
                    })
                }
                const handleBuyNow = async (product: Product) => {

                    
                    const data = { productName: product.productName, productPrice: product.price }
                    const isScriptLoaded = await loadRazorpayScript();
                    if(!isScriptLoaded){
                        alert('razorpay sdk failed to load.Please check the internate connection')
                        return;
                    }
                    try {
                        const response = await fetch('http://localhost:8080/api/order/create-order',{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(data)
                        })
                        const reddit = await response.json();

                        const options = {
                            key:'rzp_test_8RFS04mZ8mAZ43',
                            amount:product.price*100,
                            currency:"INR",
                            name:'the Biswajit Parida',
                            description:'purchased product',
                            order_id:reddit.order.id,
                            handler:async(response:any)=>{
                                const result = {orderId:response.razorpay_order_id,
                                  paymentId:response.razorpay_payment_id,
                                  signature:response.razorpay_signature,
                                  productName:product.productName,
                                  productPrice:product.price 
                                }
                                console.log(result)
                                const verificationResponse = await fetch(`http://localhost:8080/api/order/verify-order/${email}`,{
                                    method:"POST",
                                    headers:{
                                     "Content-Type":"application/json"   
                                    },
                                body:JSON.stringify(result)
                                }
                                )
                                if(verificationResponse.ok){
                                    alert('payment successfull')
                                }
                                    else{
                                        alert('payment failed')

                                    }
                                    
                            }

                            
                        }
                        const paymentObject = new window.Razorpay(options);
                        paymentObject.open();

                    } catch (error) {
                        
                    }
                }
             
            
            return (
                <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-xl mt-5">
                    {products.map((product)=>(
                        <div key={product._id}>
                            <h2>{product.productName}</h2>
                            <h1>{product.price}</h1>
                            <button className='bg-blue-600 text-cyan-50'> view details</button>
                            <button className='bg-yellow-300 text-black' onClick={() => handleBuyNow(product)}>buy</button>
                        </div>
                    ))}
                    {/* <img src="course-image.jpg" alt="Course" className="w-48 h-auto" />
                    <div className="p-4 flex-1">
                        <h2 className="text-2xl">Course Title</h2>
                        <p className="text-lg">Course description goes here. It provides an overview of the course content and objectives.</p>
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-xl font-bold">$99.99</span>
                            <div>
                                <button className="mr-2 bg-blue-500 text-white px-4 py-2 rounded">Buy</button>
                                <button className="bg-blue-500 text-white px-4 py-2 rounded">View Details</button>
                            </div>
                        </div>
                    </div> */}
                </div>
            );
        };

        export default Course;
      
   