function Search({ search, setSearch, handleSearch }) {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search city..."
                className="flex-1 px-4 py-2 rounded-xl outline-none text-gray-800 bg-white shadow"
            />
            <button
                onClick={() => (handleSearch(search) , setSearch(''))}
                className="bg-gray-900 text-white px-4 py-2 rounded-xl font-medium"
            >
                Search
            </button>
        </div>
    )
}

export default Search;