import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/context";

function NavBar() {
    const {searchData,setSearchData,HandleSubmit}=useContext(GlobalContext)
    
    return ( 
          <nav className="flex justify-between items-center px-6  py-16 container mx-auto flex-col lg:flex-row">

            <div className="text-2xl font-bold text-orange-600 ">
                <NavLink to='/'>
                Food Recipie
                </NavLink>
            </div>

            <form onSubmit={HandleSubmit} >
            <input 
            type="text" 
            name="search"
            value={searchData}
            placeholder="Enter Item..."
            onChange={(e)=>setSearchData(e.target.value)}
            className="flex-1 px-8 p-3  rounded-full shadow-red-100 focus:shadow-red-200 shadow-lg lg:w-96 outline-none text-gray-800 bg-white shadow"
            />


            </form>

            <div className="flex items-center gap-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-medium transition-colors duration-200 ${isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`
                    }
                >
                    Home
                </NavLink>
               
                <NavLink
                    to="/favorities"
                    className={({ isActive }) =>
                        `font-medium transition-colors duration-200 ${isActive ? 'text-orange-600' : 'text-gray-700 hover:text-orange-600'}`
                    }
                >
                    Favorities
                </NavLink>
            </div>


        </nav> 


        
    );
}

export default NavBar;