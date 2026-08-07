import { useContext } from "react";
import { GlobalContext } from "../../Context/context";
import Recipe from "../../Components/recipie-item";


function Home() {
    const {recipeList,loading}=useContext(GlobalContext)
     if(loading) return <div className="text-center mt-20 text-gray-500">Loading... Please Wait</div>



   return (
    <div className="max-w-6xl mx-auto px-4 py-8">

        {recipeList && recipeList.length > 0 ?
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {recipeList.map((item) => <Recipe key={item.id} item={item} />)}
            </div>
            :
            <div className="flex justify-center items-center mt-40 text-gray-400 text-lg">
                Nothing to show, Please Search Something 
            </div>
        }

    </div>
)
}
export default Home