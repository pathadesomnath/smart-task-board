function FilterBar({ filter, setFilter }) {
    return (
        <div className="flex gap-2 mb-5">
            {["all", "pending", "completed"].map((item) => (
                <button
                    key={item}
                    onClick={() => setFilter(item)}
                    className={`px-4 py-2 rounded ${filter === item
                            ? "bg-blue-600 text-white"
                            : "bg-gray-200"
                        }`}
                >
                    {item}
                </button>
            ))}
        </div>
    );
}

export default FilterBar;