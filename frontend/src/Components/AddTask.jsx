import { useState } from "react";

function AddTask({ onAddTask }) {
    const [title, setTitle] = useState("");
    const [priority, setPriority] = useState("low");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim()) return;

        onAddTask(title, priority);

        setTitle("");
        setPriority("low");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg p-6 mb-6"
        >
            <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Enter task..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="border rounded-lg p-3"
                >
                    <option value="low">🟢 Low</option>
                    <option value="medium">🟡 Medium</option>
                    <option value="high">🔴 High</option>
                </select>

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold"
                >
                    + Add Task
                </button>
            </div>
        </form>
    );
}

export default AddTask;