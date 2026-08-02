import PackageCard from "../PackageCrad/packageCards";

function Packages({ data }) {
    return (
        <div className="py-16 px-6 bg-white">

            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-3">
                    Our Tour Packages
                </h2>
                <p className="text-gray-500 text-lg max-w-xl mx-auto">
                    Choose from our carefully crafted packages for an unforgettable experience
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {data.map((pack) => (
                    <PackageCard key={pack.id} {...pack} />
                ))}
            </div>

        </div>
    )
}

export default Packages