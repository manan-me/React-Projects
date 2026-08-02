import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {
    const navigate = useNavigate()
    const [menuOpen, setMenuOpen] = useState(false)

    const navClass = ({ isActive }) =>
        `font-medium transition-colors duration-200 ${isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`

    return (
        <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">

            <div className="flex items-center justify-between">

                <div className="text-2xl font-bold text-blue-600">
                    <NavLink to='/'>✈️ TravelX</NavLink>
                </div>

                <div className="hidden md:flex items-center gap-8">
                    <NavLink to="/" className={navClass}>Home</NavLink>
                    <NavLink to="/destinations" className={navClass}>Destinations</NavLink>
                    <NavLink to="/packages" className={navClass}>Packages</NavLink>
                </div>

                <div className="hidden md:block">
                    <button
                        onClick={() => navigate('/packages')}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-full transition-colors duration-200"
                    >
                        Book Now
                    </button>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 text-2xl focus:outline-none"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 pb-4 border-t border-gray-100 pt-4">
                    <NavLink to="/" className={navClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/destinations" className={navClass} onClick={() => setMenuOpen(false)}>Destinations</NavLink>
                    <NavLink to="/packages" className={navClass} onClick={() => setMenuOpen(false)}>Packages</NavLink>
                    <button
                        onClick={() => { navigate('/packages'); setMenuOpen(false) }}
                        className="bg-blue-600 text-white font-medium px-5 py-2 rounded-full w-full"
                    >
                        Book Now
                    </button>
                </div>
            )}

        </nav>
    )
}

export default NavBar