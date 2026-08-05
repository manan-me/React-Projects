import { useContext } from "react";
import { GlobalContext } from "../../Context/context";
import Recipe from "../../Components/recipie-item";

function Home() {
    const { loading, recipeList } = useContext(GlobalContext);
    

    if (loading) return <div>Loading...</div>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 container mx-auto">
            {recipeList && recipeList.length > 0
                ? recipeList.map((item) => (
                    <Recipe key={item.id} item={item} />  
                ))
                : <p className="text-center text-gray-500 col-span-3">
                    No recipes found. Search something above!
                  </p>
            }
        </div>
    );
}

export default Home;