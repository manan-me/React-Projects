import { useContext } from "react";
import { GlobalContext } from "../../Context/context";
import Recipe from "../../Components/recipie-item";

function Favorites() {
    const { favoriteList } = useContext(GlobalContext);

    return (
        <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-orange-600 my-6">My Favorites</h2>
            {favoriteList.length > 0
                ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteList.map(item => <Recipe key={item.id} item={item} />)}
                  </div>
                : <p className="text-gray-500 text-center mt-20">No favorites yet — click Like to save!</p>
            }
        </div>
    );
}

export default Favorites;