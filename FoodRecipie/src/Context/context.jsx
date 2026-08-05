import { createContext, useState } from "react";


export const GlobalContext=createContext(null)


function GlobalState({children}) {
    const [searchData,setSearchData]=useState('')
    const [loading,setLoading]=useState(false)
    const [recipeList,setRecipeList]=useState([])
    const [favoriteList, setFavoriteList] = useState([]);
    const [recipeDetailsDatat, setrecipeDetailsDatat] = useState([]);
    async function HandleSubmit(e){
        e.preventDefault()
        setLoading(true)
        try {
            const res=await fetch(`https://forkify-api.jonas.io/api/v2/recipes?search=${searchData}&key=ecec315e-977c-45f3-9363-dd2a68765e07

`)
            const data=await res.json()
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes)
                setLoading(false)
                setSearchData('')
            }
            

        } catch (error) {
            console.log(error.message);
            setLoading(false)
            
            
        }
    } 



function addToFavorite(item) {
   
    const exists = favoriteList.find(f => f.id === item.id);
    if (exists) {
        setFavoriteList(favoriteList.filter(f => f.id !== item.id));
    } else {
        setFavoriteList([...favoriteList, item]);
    }
}


    return (  
       <GlobalContext.Provider value={{recipeDetailsDatat, setrecipeDetailsDatat,favoriteList, addToFavorite,loading,setLoading,recipeList,searchData,setSearchData,HandleSubmit}}>
        {children}
       </GlobalContext.Provider>

    );
}
export default GlobalState

