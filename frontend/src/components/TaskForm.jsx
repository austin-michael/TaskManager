import { useState } from "react";

const TaskForm = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask();
  };

  const createTask = async () => {
    const newTask = {
      title: title,
      description: description,
    };

    const request = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      body: JSON.stringify(newTask),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();

    if (request.status === 201) {
      setTasks((prevtasks) => [...prevtasks, response]);
    }
  };

  return (
    <form>
      <label>Title</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <label>Description</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input>

      <button type="submit" onClick={handleSubmit}>
        Create Task
      </button>
    </form>
  );
};

export default TaskForm;
