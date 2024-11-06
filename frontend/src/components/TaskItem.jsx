import { useState } from "react";

const TaskItem = ({ task, setTasks }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const updateTask = async () => {
    const newTaskInfo = {
      title,
      description,
    };

    const request = await fetch(`http://localhost:5000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskInfo),
    });
    const response = await request.json();

    if (request.status === 201) {
      setTasks((currentTasks) => {
        let taskObj = currentTasks.find(
          (currentTask) => currentTask.id === task.id
        );
        taskObj.title = response.title;
        taskObj.description = response.description;
        return currentTasks;
      });
    }

    setIsEditing(false);
  };

  const deleteTask = async () => {
    const request = await fetch(`http://localhost:5000/api/tasks/${task.id}`, {
      method: "DELETE",
    });

    if (request.status === 204) {
      setTasks((currentTasks) =>
        currentTasks.filter((currentTask) => currentTask.id !== task.id)
      );
    }
  };

  return (
    <li className="task">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={updateTask}>Update</button>
        </>
      ) : (
        <>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={deleteTask}>Delete</button>
        </>
      )}
    </li>
  );
};

export default TaskItem;
