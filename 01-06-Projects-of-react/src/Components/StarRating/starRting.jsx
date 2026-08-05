import { useState } from "react";
import {FaStar} from 'react-icons/fa'


function StarRating({noOfStars}) {
   const [rating,setRating]=useState(0)
   const [hover,setHover]=useState(0)


    return (  


<div className="min-h-screen flex flex-col items-center justify-center">
      {[...Array(noOfStars)].map((_,index)=>{
           
           index+=1

           return(
          <FaStar 
          key={index}
          className={index <= (hover || rating) ? 'text-yellow-400 cursor-pointer' : 'text-gray-300' }
          onClick={()=>setRating(index)}
          onMouseMove={()=>setHover(index)}
          onMouseLeave={()=>setHover(rating)}
          size={40}
          
          
          />
          

           )



      })}

<button onClick={()=>{
    setRating(0)
    setHover(0)

}}
    className=" mt-2 px-4 py-2 bg-orange-500 rounded-lg text-sm font-medium">
            Reset
          </button>

</div>
    );
}

export default StarRating;