import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../Context/context";

function Details() {
    const { id } = useParams();
    const { loading, setLoading, recipeDetailsDatat, setrecipeDetailsDatat, favoriteList, addToFavorite } = useContext(GlobalContext);

    useEffect(() => {
        async function fetchDetails() {  
            setLoading(true);
            try {
                const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes/${id}`)
                const data = await res.json();  
                
                setrecipeDetailsDatat(data?.data?.recipe); 
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        }
        fetchDetails();
    }, [id]);  

    const isFav = favoriteList?.find(f => f.id === recipeDetailsDatat?.id);

       if (loading) return <div>Loading...</div>;


    if (!recipeDetailsDatat) return (
        <div className="text-center mt-20 text-gray-500">Recipe not found!</div>
    );

    return (
        <div className="container mx-auto px-6 py-10 max-w-3xl">

            <div className="relative">
                <img
                    src={recipeDetailsDatat?.image_url}
                    alt={recipeDetailsDatat?.title}
                    className="w-full h-72 object-cover rounded-xl shadow-lg"
                />
                <br />
                <button
                    onClick={() => addToFavorite(recipeDetailsDatat)}
                    className={`absolute top-4 right-4 text-3xl transition-transform hover:scale-110 ${isFav ? 'text-red-500' : 'text-white'}`}
                >
                    Like
                </button>
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mt-6">
                {recipeDetailsDatat?.title}
            </h1>
            <p className="text-orange-600 font-medium mt-1">
                By {recipeDetailsDatat?.publisher}
            </p>

            <div className="flex gap-6 mt-4 text-gray-600">
                <span>{recipeDetailsDatat?.cooking_time} minutes</span>
                <span> {recipeDetailsDatat?.servings} servings</span>
            </div>

            <h2 className="text-xl font-bold text-gray-800 mt-8 mb-4">
                Ingredients
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {recipeDetailsDatat?.ingredients?.map((ing, i) => (
                    <li
                        key={i}
                        className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm text-gray-700 flex items-start gap-2"
                    >
                        <span className="text-orange-500 mt-0.5">✔</span>
                        <span>
                            {ing.quantity} {ing.unit} {ing.description}
                        </span>
                    </li>
                ))}
            </ul>

            {recipeDetailsDatat?.source_url && (
                <a
                    href={recipeDetailsDatat.source_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-8 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200"
                >
                    View Full Recipe →
                </a>
            )}

        </div>
    );
}

export default Details;