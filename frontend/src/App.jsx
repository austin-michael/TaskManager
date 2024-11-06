import TaskList from "./components/TaskList";

import "./App.css";
import "./assets/styles/TaskList.css";
import "./assets/styles/TaskItem.css";
import "./assets/styles/TaskForm.css";
import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("http://localhost:5000/api/tasks/");
      const data = await response.json();

      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <>
      <h1>My Tasks</h1>
      <TaskForm setTasks={setTasks} />
      {tasks && <TaskList tasks={tasks} setTasks={setTasks} />}
    </>
  );
}

export default App;
