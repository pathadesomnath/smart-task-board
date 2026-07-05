// Imports
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import AddTask from "./Components/AddTask";
import SearchBar from "./Components/SearchBar";
import FilterBar from "./Components/FilterBar";
import ProgressBar from "./Components/ProgressBar";
import TaskCard from "./Components/TaskCard";

import {
  getTasks,
  addTask,
  toggleTask,
  deleteTask,
} from "./Api/taskApi";

function App() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    setTasks(await getTasks());
  }

  async function handleAdd(title, priority) {
    await addTask({ title, priority });
    loadTasks();
  }

  async function handleToggle(id) {
    await toggleTask(id);
    loadTasks();
  }

  async function handleDelete(id) {
    await deleteTask(id);
    loadTasks();
  }

  const filtered = tasks.filter((task) => {
    const matchSearch = task.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      filter === "all"
        ? true
        : filter === "completed"
          ? task.completed
          : !task.completed;

    return matchSearch && matchFilter;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto p-8">
        <Header />

        <AddTask onAddTask={handleAdd} />

        <SearchBar search={search} setSearch={setSearch} />

        <FilterBar filter={filter} setFilter={setFilter} />

        <ProgressBar tasks={tasks} />

        <div className="mb-4 font-semibold">
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length} | Pending:{" "}
          {tasks.filter((t) => !t.completed).length}
        </div>

        {filtered.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;