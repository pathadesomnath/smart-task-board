function SearchBar({ search, setSearch }) {
    return (
        <input
            className="w-full border rounded-lg p-3 mb-4"
            placeholder="🔍 Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
    );
}

export default SearchBar;