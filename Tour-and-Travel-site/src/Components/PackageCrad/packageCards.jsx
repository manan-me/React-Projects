import { useState } from 'react'

function PackageCard({ name, duration, groupSize, price, img, description, includes }) {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">

            <div className="relative h-56 overflow-hidden">
                <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    PKR {price}
                </div>
            </div>

            <div className="p-5 flex flex-col flex-1">

                <h2 className="text-xl font-bold text-gray-800 mb-3">{name}</h2>

                <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                         {duration}
                    </span>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                         {groupSize}
                    </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {showMore ? description : `${description.slice(0, 80)}...`}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-600 hover:text-blue-700 font-medium ml-1"
                    >
                        {showMore ? 'See Less' : 'See More'}
                    </button>
                </p>

                <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Includes:</p>
                    <div className="flex flex-wrap gap-2">
                        {includes.map((item, index) => (
                            <span
                                key={index}
                                className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full border border-blue-200"
                            >
                                 {item}
                            </span>
                        ))}
                    </div>
                </div>

                <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl transition-colors duration-200">
                    Book Package
                </button>

            </div>
        </div>
    )
}

export default PackageCard