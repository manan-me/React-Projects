import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-6 text-center">

            <h2 className="text-2xl font-bold text-blue-400 mb-2">✈️ TravelX</h2>

            <p className="text-gray-400 text-sm mb-6">
                Discover the beauty of Pakistan with our tour packages.
            </p>

            <div className="flex justify-center gap-6 mb-6">
                <NavLink to="/" className="text-gray-400 hover:text-white text-sm">Home</NavLink>
                <NavLink to="/destinations" className="text-gray-400 hover:text-white text-sm">Destinations</NavLink>
                <NavLink to="/packages" className="text-gray-400 hover:text-white text-sm">Packages</NavLink>
            </div>

            <p className="text-gray-400 text-sm mb-6">travelx@gmail.com | +92 300 1234567 | Lahore, Pakistan</p>

           

        </footer>
    )
}

export default Footer