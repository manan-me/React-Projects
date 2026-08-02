import React from 'react'
import { NavLink,useNavigate  } from 'react-router-dom'

function HeroSection() {
        const navigate=useNavigate()

    return (
        <div className="relative w-full h-screen">

            <img
                src="https://images.pexels.com/photos/35302567/pexels-photo-35302567.jpeg"
                alt="Mountains and Lake"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

                <h1 className="text-5xl font-bold text-white mb-4">
                    Let's Travel with TravelX
                </h1>

                <p className="text-lg text-gray-200 mb-8 max-w-xl">
                    Discover the most beautiful places in Pakistan. Your dream vacation starts here.
                </p>

                <div className="flex gap-4">
                    <button 
                    onClick={()=>navigate("/packages")}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full transition-colors duration-200">
                        Explore Now
                    </button>
                    <button 
                    onClick={()=>navigate("/destinations")}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium px-8 py-3 rounded-full transition-colors duration-200">
                   
                        Learn More
                    </button>
                </div>

            </div>
        </div>
    );
}

export default HeroSection;