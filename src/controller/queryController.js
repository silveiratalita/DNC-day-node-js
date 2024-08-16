const tasks = require("../../tasks");
const fs = require("fs");
const path = require("path");

class QueryController {
  constructor() {}

  async index(req, res, next) {
    return res.status(200).send(tasks.tasks);
  }

  async getTaskById(req, res, next) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).send("Invalid ID format");
    }

    const task = tasks.tasks.find((t) => t.id === id);

    if (!task) {
      return res.status(404).send("Task not found");
    }

    return res.status(200).send(task);
  }
}

module.exports = () => new QueryController();
