const express = require("express");
const router = express.Router();

let tasks = [
  {
    id: 1,
    title: "Complete project proposal",
    description: "Write and submit the proposal for the new project by Friday.",
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Discuss project milestones and next steps with the team.",
  },
  {
    id: 3,
    title: "Update website content",
    description: "Review and update the homepage content and about section.",
  },
  {
    id: 4,
    title: "Client follow-up",
    description:
      "Follow up with the client regarding feedback on the last deliverable.",
  },
  {
    id: 5,
    title: "Code review",
    description: "Conduct a thorough code review for the new feature branch.",
  },
  {
    id: 6,
    title: "Prepare presentation",
    description: "Prepare slides for the upcoming quarterly review meeting.",
  },
  {
    id: 7,
    title: "Fix bugs in user authentication",
    description:
      "Resolve login issues and enhance error handling for better UX.",
  },
  {
    id: 8,
    title: "Database backup",
    description:
      "Run a backup of the production database to ensure data safety.",
  },
  {
    id: 9,
    title: "Research competitor products",
    description:
      "Analyze features of competitor products to improve our offerings.",
  },
  {
    id: 10,
    title: "Write documentation for API",
    description:
      "Complete the documentation for the newly added API endpoints.",
  },
];

router.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

router.get("/tasks", (req, res) => {
  res.status(200).json(tasks);
});

router.get("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === taskId);

  console.log(taskId);

  if (task) {
    res.status(200).json(task);
  } else {
    res
      .status(404)
      .json({ message: `Could not find a task with id ${taskId}` });
  }
});

router.put("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const { title, description } = req.body;

  if (!title || !description) {
    res.status(400).json({ message: "title and description are required" });
  }

  const task = tasks.find((task) => task.id === taskId);

  if (!task) {
    res
      .status(404)
      .json({ message: `Could not find a task with id ${taskId}` });
  } else {
    task.title = title;
    task.description = description;

    res.status(201).json(task);
  }
});

router.delete("/tasks/:id", (req, res) => {
  const taskId = parseInt(req.params.id);

  const taskIndex = tasks.findIndex((task) => task.id === taskId);

  console.log(taskIndex);

  if (taskIndex !== -1) {
    tasks = tasks.filter((task, index) => index !== taskIndex);
    res.status(204).send();
  } else {
    res
      .status(404)
      .json({ message: `Could not find a task with id ${taskId}` });
  }
});

module.exports = router;
