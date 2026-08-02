import React from 'react'
import { NavLink,useNavigate  } from 'react-router-dom'

function NavBar() {
    const navigate=useNavigate()
    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">

            <div className="text-2xl font-bold text-blue-600">
                <NavLink to='/'>
                ✈️ TravelX
                </NavLink>
            </div>

            <div className="flex items-center gap-8">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/destinations"
                    className={({ isActive }) =>
                        `font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                    }
                >
                    Destinations
                </NavLink>
                <NavLink
                    to="/packages"
                    className={({ isActive }) =>
                        `font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`
                    }
                >
                    Packages
                </NavLink>
            </div>

            
            <div>
                <button 
                onClick={()=>navigate('/packages')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-colors duration-200">
                    Book Now
                </button>
            </div>

        </nav>
    );
}

export default NavBar;