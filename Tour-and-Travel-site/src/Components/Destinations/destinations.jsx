import React from 'react'
import DestCard from '../DestCards/destCards'

function Destinations({ data }) {
    return (
        <div className="py-16 px-6 bg-gray-50">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                    Popular Destinations
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    Explore the most beautiful in Your own Pakistan
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {data.map((dest) => (
                    <DestCard key={dest.id} {...dest} />
                ))}
            </div>

        </div>
    )
}

export default Destinations