import { useContext } from "react";
import { GlobalContext } from "../Context/context";
import { Link,NavLink } from 'react-router-dom';

function Recipe({ item }) {
    const { HandleAddToFavorites, favoritesList } = useContext(GlobalContext)
    const isFavorite = favoritesList.indexOf(item.id) >= 0

    return ( 
          <div className="bg-white rounded-xl shadow overflow-hidden">
            <div>
                <NavLink to={`/details/${item.id}`}>
                    <div>
                    <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover" />
                </div>
                </NavLink>
                <div className="p-4">
                    <h1 className="text-base font-semibold text-gray-800">{item.title}</h1>
                    <p className="text-sm text-gray-500">{item.publisher}</p>

                </div>
                <div className="px-4">
                    <Link to={`/details/${item.id}`} className="text-sm text-blue-600 hover:underline">
                    Details
                    </Link>
                </div>
                <div className="p-4">
                    <button 
                    onClick={() => HandleAddToFavorites(item.id)}
                    className={`text-sm px-3 py-1 rounded-full ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                        Like
                    </button>
                </div>
            </div>


          </div>
     );
}

export default Recipe;