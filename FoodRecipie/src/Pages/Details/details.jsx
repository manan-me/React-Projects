import { useContext, useEffect } from "react"
import { GlobalContext } from "../../Context/context"
import { useParams } from "react-router-dom"

function Details() {
    const {HandleAddToFavorites,favoritesList,recipeDetailsDatat,setLoading,loading,setRecipeDetailsDatat,}=useContext(GlobalContext)
    const {id}=useParams()
    const isFavorite = favoritesList.indexOf(recipeDetailsDatat?.id) >= 0




    useEffect(()=>{
        async function DetailsGetter() {
          setLoading(true)
          try {
            const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
            const data=await res.json()
            console.log(data);
            setRecipeDetailsDatat(data?.data?.recipe)
            setLoading(false)
            
        } catch (error) {
            console.log(error.message);
            setLoading(false)
            
          }
            
        }
        DetailsGetter()
        
        
    },[id])


    if(loading) return <div className="text-center mt-20 text-gray-500">Loading... Please Wait</div>

    
    return <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow overflow-hidden">
            <div>
                <img
                 src={recipeDetailsDatat?.image_url} 
                 alt={recipeDetailsDatat?.title}
                 className="w-full h-64 object-cover" />
            </div>
            <div className="px-6 pt-4">
                <p className="text-sm text-gray-500">{recipeDetailsDatat?.publisher}</p>
            </div>
            <div className="px-6 pt-1">
                <h1 className="text-2xl font-bold text-gray-800">{recipeDetailsDatat?.title}</h1>
            </div>
            <div className="p-4">
                    <button 
                    onClick={() => HandleAddToFavorites(recipeDetailsDatat?.id)}
                    className={`text-sm px-3 py-1 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        Like
                    </button>
            </div>
            <div className="px-6 pb-6">
                <h1 className="text-lg font-semibold text-gray-800 mb-3">Ingredients</h1>
                <div>
                    <ul className="grid grid-cols-2 gap-2">
                        {recipeDetailsDatat?.ingredients?.map((item,index)=> <li key={index} className="bg-orange-50 rounded-lg px-3 py-2 text-sm text-gray-700">
                                    <span className="font-medium">{item?.quantity} {item?.unit} </span>
                                    <span>{item?.description}</span>

                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    </div>
}
export default Details