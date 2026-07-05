function TaskCard({ task, onToggle, onDelete }) {
    const colors = {
        high: "bg-red-100 text-red-700",
        medium: "bg-yellow-100 text-yellow-700",
        low: "bg-green-100 text-green-700",
    };

    return (
        <div className="bg-white rounded-lg shadow p-4 flex justify-between items-center mb-3">
            <div className="flex items-center gap-4">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => onToggle(task.id)}
                    className="w-5 h-5"
                />

                <div>
                    <h3 className={task.completed ? "line-through text-gray-400 font-semibold" : "font-semibold"}>
                        {task.title}
                    </h3>

                    <span className={`text-xs px-2 py-1 rounded ${colors[task.priority]}`}>
                        {task.priority.toUpperCase()}
                    </span>
                </div>
            </div>

            <button
                onClick={() => onDelete(task.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
            >
                Delete
            </button>
        </div>
    );
}

export default TaskCard;