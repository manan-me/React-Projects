import Recipe from "../../Components/recipie-item";
import { useContext } from "react";
import { GlobalContext } from "../../Context/context";


function Favorities() {
    const {recipeList, favoritesList} = useContext(GlobalContext)

    const favoriteRecipes = recipeList.filter(item => favoritesList.indexOf(item.id) >= 0)

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">

            {favoriteRecipes.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {favoriteRecipes.map((item) => <Recipe key={item.id} item={item} />)}
                </div>
                :
                <div className="flex justify-center items-center mt-40 text-gray-400 text-lg">
                    No favorites yet, Like something 
                </div>
            }

        </div>
    )
}
export default Favorities