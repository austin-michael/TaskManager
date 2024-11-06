const TaskItem = ({ task, setTasks }) => {
  const handleDelete = () => {
    deletetask();
  };

  const deletetask = async () => {
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
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TaskItem;
