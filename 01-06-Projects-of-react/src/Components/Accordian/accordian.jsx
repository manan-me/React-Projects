import Faqs from "./data";
import { useState } from "react";

function Accordian() {
    const [selected,setSelected]=useState(null)
    const [multiSelected,setMultiSelected]=useState(false)
    const [multiple,setMultiple]=useState([])


    const handleMultiSelect=(id)=>{
       const cpyarr=[...multiple]

       const findIndex=cpyarr.indexOf(id)

       if(findIndex !== -1){
        cpyarr.splice(findIndex,1)
       }
       else{
        cpyarr.push(id)
       }
        setMultiple(cpyarr)
  }



    return (  
      <div className="bg-amber-300 rounded-2xl max-w-md mx-auto mt-10 px-4">
         <h1 className="text-xl font-semibold mb-6 p-4 ">Accordian</h1>

         <button 
         onClick={() => {
            setMultiSelected(!multiSelected)
            setSelected(null)  
            setMultiple([])      
            }}                                              
         className="text-xl font-semibold mb-6 bg-blue-600 text-white p-2 rounded-2xl">Enable Multi Select</button>
        <div className="p-4">

           {(Faqs && Faqs.length > 0)?
           Faqs.map((item)=>( <div key={item.id} className="border-b py-3">
            <div 
            className="flex justify-between"
           onClick={() => multiSelected ? handleMultiSelect(item.id) : setSelected(selected === item.id ? null : item.id)}
            >

           <h1 className="text-blue-900">{item.question}</h1>
           <span>+</span>  
           
            </div>
           { multiSelected ? (((multiple.indexOf(item.id)) !== -1)? <div><h2 className='text-red-700'>{item.answer}</h2></div> : null )   
           : ((selected === item.id) ? <div><h2 className='text-red-700'>{item.answer}</h2></div> : null ) }
           
           
               </div>
           ))
           
           : <div>No data Available</div>}

        </div>
         

        


      </div>



    );
}

export default Accordian;