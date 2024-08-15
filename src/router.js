const express = require("express");
const commandController = require("./controller/commandController");

const command = commandController();

const router = express.Router();
router.post("/create", command.createBook.bind(command));

module.exports = { router };
