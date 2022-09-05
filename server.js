const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const app = express();

const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(logger("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.json({ message: "Server Works" }));
app.use("/api", AppRouter);

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
//User routes here:
// app.get("/users", (req, res) => res.json);

// app.get("/scrolls", (req, res) => {
//   console.log("Accessing scrolls");
//   res.json({ message: "Accessing scrolls" });
// });

app.get("/scrolls/:id", (req, res) => {
  console.log(`Accessing scroll with id ${req.params.id}`);
  res.json({ message: `Accessing scroll with id ${req.params.id}` });
});
