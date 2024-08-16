const express = require("express");
const commandController = require("./controller/commandController");
const queryController = require("./controller/queryController");
const command = commandController();
const query = queryController();

const router = express.Router();
router.post("/tasks", command.createTask.bind(command));
router.put("/tasks/:id", command.updateTask.bind(command));
router.delete("/tasks/:id", command.deleteTask.bind(command));

router.get("/tasks", query.index.bind(query));
router.get("/tasks/:id", query.getTaskById.bind(query));
module.exports = { router };
