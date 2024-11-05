import TaskList from "./components/TaskList";

import "./App.css";
import { useEffect, useState } from "react";

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
      {tasks && <TaskList tasks={tasks} />}
    </>
  );
}

export default App;
