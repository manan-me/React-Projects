
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DestCard({name,country,price,img,description}) {
const [showMore,setShowMore]=useState(false)
const nav=useNavigate()

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">

            <div className="relative h-56 overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    PKR {price}
                </div>
            </div>

            <div className="p-5">

                <div className="flex items-center justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-800">{name}</h2>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                         {country}
                    </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                    {showMore ? description : (description.slice(0,80))    }
                    <button
                        onClick={()=>setShowMore(!showMore)}
                        className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                    >
                        {showMore ? 'Show Less' :'Show More' }
                    </button>
                </p>

                <button  
                onClick={()=>nav("/packages")}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-colors duration-200">
                    Book Now
                </button>

            </div>
        </div>
    )
}

export default DestCard