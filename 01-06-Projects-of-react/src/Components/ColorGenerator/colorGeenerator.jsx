import { useState } from "react";
import { HexColor, RgbColor } from './color'




function RandomColorGenerator() {
    const [color,setColor]=useState("#fff111")
    const [colorType,setColorType]=useState("hex")

const handleClick=()=>{
    if(colorType === 'rgb'){
        setColor(RgbColor())
    }
    else{
        setColor(HexColor())
    }

}
const handleRgbClick=()=>{
            setColor(RgbColor())
            setColorType('rgb')
            
            
        }
        
const handleHexClick=()=>{
            setColor(HexColor())
            setColorType('hex')

    
}


    return ( 
        <div className="min-h-screen flex flex-col items-center justify-center"  style={{backgroundColor:color}}>
            <div className="mb-6 flex gap-3">
                <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium"
                onClick={handleRgbClick}
                
                >Rgb Color</button>

                <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium"
                onClick={handleHexClick}

                >Hex Color</button>

                <button className="px-4 py-2 bg-white rounded-lg text-sm font-medium"
                onClick={handleClick}
                
                >Generate Color</button>

                
                
                </div>  
                <div>
                    <h1 className="text-4xl font-bold underline text-white">{color}</h1>
                    </div>   
           

             </div>

     );
}

export default RandomColorGenerator;