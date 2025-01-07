import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="bg-gradient-to-r from-black to-white text-white py-4 fixed bottom-0 w-full">
        <div className="container mx-auto text-center">
            <p className="text-lg hover:text-gray-400 transition duration-300">
                &copy; {new Date().getFullYear()} learnQ. All rights reserved.
            </p>
        </div>
    </footer>
      
    </div>
  )
}

export default Footer


// new Date() create a a new date object with current date and time 
//getFullYear() extracta the full year from the date object
//fixed-bottom fix the footer fix to the base