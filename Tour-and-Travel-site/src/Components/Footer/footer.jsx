import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8 px-6">

            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

                <div>
                    <h2 className="text-2xl font-bold text-blue-400 mb-4">✈️ TravelX</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Discover the beauty of Pakistan with our expertly crafted tour packages. Your adventure starts here.
                    </p>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="flex flex-col gap-2">
                        {['/', '/destinations', '/packages'].map((path, i) => (
                            <li key={i}>
                                <NavLink
                                    to={path}
                                    className={({ isActive }) =>
                                        `text-sm transition-colors duration-200 ${isActive ? 'text-blue-400' : 'text-gray-400 hover:text-white'}`
                                    }
                                >
                                    {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Popular Destinations</h3>
                    <ul className="flex flex-col gap-2">
                        {['Babusar Top', 'Skardu', 'Hunza Valley', 'Fairy Meadows'].map((dest, i) => (
                            <li key={i} className="text-gray-400 hover:text-white text-sm cursor-pointer transition-colors duration-200">
                                 {dest}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                    <ul className="flex flex-col gap-3 text-sm text-gray-400">
                        <li className="flex items-center gap-2">
                             travelx@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                           +92 300 1234567
                        </li>
                        <li className="flex items-center gap-2">
                             Lahore, Pakistan
                        </li>
                    </ul>

                    <div className="flex gap-3 mt-4">
                        
                        {['Facebook', 'Instagram', 'Twitter'].map((social, i) => (
                            
                              <a  key={i}
                                href="#"
                                className="bg-gray-700 hover:bg-blue-600 text-white text-xs px-3 py-1 rounded-full transition-colors duration-200"
                            >
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            <div className="border-t border-gray-700 pt-6 text-center">
                <p className="text-gray-500 text-sm">
                    © 2026 TravelX. All Rights Reserved by Manan. Made with Love in Pakistan
                </p>
            </div>

        </footer>
    )
}

export default Footer