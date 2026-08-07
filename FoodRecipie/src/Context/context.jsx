import { createContext, useState } from "react";


export const GlobalContext = createContext(null)


function GlobalState({ children }) {
    const [searchData, setSearchData] = useState('')
    const [loading, setLoading] = useState(false)
    const [recipeList, setRecipeList] = useState([])
    const [favoritesList, setFavoritesList] = useState([])
    const [recipeDetailsDatat, setRecipeDetailsDatat] = useState([])
    async function HandleSubmit() {
        setLoading(true)
        try {
            const res = await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchData}&key=ecec315e-977c-45f3-9363-dd2a68765e07

`)
            const data = await res.json()
            if (data?.data?.recipes) {

                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchData('')
            }


        } catch (error) {
            console.log(error.message);
            setLoading(false)


        }
    }

    function HandleAddToFavorites(id) {
        const cpyArr = [...favoritesList]
        const index = favoritesList.indexOf(id)
        if (index >= 0) {
            cpyArr.splice(index, 1)
        }
        else {
            cpyArr.push(id)
        }
        setFavoritesList(cpyArr)
    }

    return (
        <GlobalContext.Provider value={{
            HandleAddToFavorites,
            favoritesList,
            setFavoritesList,
            loading,
            setLoading,
            recipeList,
            searchData,
            setSearchData,
            HandleSubmit,
            recipeDetailsDatat,
            setRecipeDetailsDatat
        }}>
            {children}
        </GlobalContext.Provider>

    );
}
export default GlobalState

