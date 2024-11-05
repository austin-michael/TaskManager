import TaskItem from "./TaskItem";

const TaskList = ({ tasks }) => {
  return (
    <div className="tasks">
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            description={task.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
