import { useState } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

function TaskTracker() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  const addTask = () => {
    if (taskText.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: taskText.trim(), completed: false },
      ]);
      setTaskText("");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-4">Task Tracker</h1>
      <div className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Start writing your task..."
          className="input input-bordered w-full p-5"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="btn btn-primary" onClick={addTask}></button>
      </div>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 border rounded hover:shadow-sm"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              className="btn btn-sm btn-error"
              onClick={() => deleteTask(task.id)}
            >
              <span className="material-icons">delete</span>
            </button>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <p className="text-center text-gray-500 mt-4">
          No tasks yet. Start by adding a new task!
        </p>
      )}
    </div>
  );
}

export default TaskTracker;
