const express = require("express");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

const PORT = 5000;

app.use(express.json());

app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
