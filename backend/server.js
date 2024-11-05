const express = require("express");
const cors = require("cors");
const app = express();

const taskRoutes = require("./routes/taskRoutes");

const PORT = 5000;

app.use(cors());

app.use("/api", taskRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
