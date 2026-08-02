import { useState } from 'react'

function PackageCard({ name, duration, groupSize, price, img, description, includes }) {
    const [showMore, setShowMore] = useState(false)

    return (
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">

            <img
                src={img}
                alt={name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">

                <div className="flex justify-between items-start mb-2">
                    <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
                    <span className="text-blue-600 font-bold text-sm">PKR {price}</span>
                </div>

                <p className="text-gray-400 text-xs mb-3">{duration} &bull; {groupSize}</p>

                <p className="text-gray-600 text-sm mb-3">
                    {showMore ? description : `${description.slice(0, 90)}...`}
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-500 text-sm ml-1 underline"
                    >
                        {showMore ? 'less' : 'more'}
                    </button>
                </p>

                <p className="text-xs text-gray-500 mb-3">
                    Includes: {includes.join(', ')}
                </p>

                <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700">
                    Book Now
                </button>

            </div>
        </div>
    )
}

export default PackageCard