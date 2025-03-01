
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
                        script.src = "https://checkout.razorpay.com/v1/checkout.js";
                        script.onload=()=>resolve(true);
                        script.onerror=()=>resolve(false);
                        document.body.appendChild(script);
                    })
                }
                loadRazorpayScript().then((success)=>{
                    if(!success){
                        console.log("razorpay sdk failed")
                    }
                })
                const handleBuyNow = async (product: Product) => {
                    if(!email){
                        alert('email is not available to proceed further')
                        return
                    }
                    console.log(email)

                    
                    const data = { productName: product.productName, productPrice: product.price }
                    const isScriptLoaded = await loadRazorpayScript();
                    if(!isScriptLoaded){
                        alert('razorpay sdk failed to load.Please check the internate connection')
                        return;
                    }
                    
                        const response = await fetch('http://localhost:8080/api/order/create-order',{
                            method:"POST",
                            headers:{
                                "Content-Type":"application/json"
                            },
                            body:JSON.stringify(data)
                        })
                        const reddit = await response.json();
                        console.log(reddit.order.id)

                        const options = { 
                            key:'rzp_test_09VQZ4hfMNl1a6',
                            amount:product.price*100,
                            currency:"INR",
                            name:'the Biswajit Parida',
                            description:'purchased product',
                            order_id:reddit.order.id,
                            handler:async(response:any)=>{

                                console.log(response)

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
                        console.log(options)
                        const paymentObject = new window.Razorpay(options);
                        paymentObject.open();

                    
                }
             
            
            return (
                <div className="min-h-screen bg-gradient-to-r from-green-400 to-white flex flex-col items-center">
                    <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden w-full max-w-xl mt-5 bg-gradient-to-r from-green-400 to-white p-5">
                        {products.map((product) => (
                            <div key={product._id} className="w-full mb-4 p-4 bg-white rounded-lg shadow-md">
                                <h2 className="text-xl font-bold text-green-700">{product.productName}</h2>
                                <h1 className="text-lg text-gray-800">₹{product.price}</h1>
                                <div className="flex justify-between mt-4">
                                    <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Details</button>
                                    <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600" onClick={() => handleBuyNow(product)}>Buy</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        };

        export default Course;




        
      
   