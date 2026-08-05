import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../Context/context";
function Recipe({ item }) {
     const { favoriteList, addToFavorite } = useContext(GlobalContext);
    const isFav = favoriteList.find(f => f.id === item.id);
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 truncate">{item.title}</h3>
                <p className="text-sm text-orange-600 mt-1">{item.publisher}</p>
                 <Link to={`/details/${item?.id}`} className="text-orange-600 font-medium hover:underline" >
                        View Details
                    </Link>
                    <br />
                    <button onClick={() => addToFavorite(item)} className={`text-xl ${isFav ? 'text-red-500' : 'text-gray-300'}`} >
                        Like
                    </button>
            </div>
        </div>
    );
}

export default Recipe;