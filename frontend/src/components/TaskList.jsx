import TaskItem from "./TaskItem";

const TaskList = ({ tasks, setTasks }) => {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} setTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
