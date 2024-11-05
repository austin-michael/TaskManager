const TaskItem = ({ title, description }) => {
  return (
    <li className="task">
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
};

export default TaskItem;
