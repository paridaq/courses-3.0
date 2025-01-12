
        import React from 'react';
        import {useState,useEffect} from 'react'

        const Course = () => {
            return (
                <div className="flex border border-gray-300 rounded-lg overflow-hidden w-full max-w-xl mt-5">
                    <img src="course-image.jpg" alt="Course" className="w-48 h-auto" />
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
                    </div>
                </div>
            );
        };

        export default Course;
      
   