import { useEffect } from "react";
import { useState } from "react";

function LoadBtnImages() {

const [loading,setLoading]=useState(false)
const [products,setProducts]=useState([])
const [btnCount,setBtnCount]=useState(0)
const [errorMessage, setErrorMessage] = useState(null)

async function fetchProducts(){
    try {
        setLoading(true)
        const response=await fetch(`https://dummyjson.com/products?limit=20&skip=${btnCount === 0 ? 0 : btnCount*20}`)
        const data=await response.json()
        setProducts((prevData)=>[...prevData,...data.products])
        setLoading(false)
    } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)        
    }
    
}

useEffect(()=>{
    fetchProducts()

},[btnCount])

      if(loading) {
    return <div className="text-center mt-10 text-gray-500 animate-pulse">Loading, Please wait</div>
    }
    if(errorMessage !== null) {
        return <div className="text-center mt-10 text-red-500">Error: {errorMessage}</div>
    }

    return ( 
        <div className="max-w-5xl mx-auto px-4 py-10">

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {products && products.length ?
                products.map((item,index)=> (
                    <div key={`${item.id}-${index}`} className="border rounded-lg p-3">
                        <img src={item.thumbnail} alt={item.title} className="w-full h-32 object-cover rounded-md mb-2" />
                        <p className="text-sm text-gray-700 font-medium">{item.title}</p>
                        <p className="text-sm text-blue-600">${item.price}</p>
                    </div>
                )) 
                : null
                }
            </div>

            <div className="text-center mt-8">
                {((products && products.length) < 100 ) ?
                <button
                className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                onClick={()=>setBtnCount(btnCount+1)}
                >Load More Products</button>
                :
                <div className="text-gray-500">You Have Loaded All 100 Items</div>
                }
            </div>
           
        </div>
     );
}

export default LoadBtnImages;