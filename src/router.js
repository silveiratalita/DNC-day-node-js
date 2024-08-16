const express = require("express");
const commandController = require("./controller/commandController");
const queryController = require("./controller/queryController");
const command = commandController();
const query = queryController();

const router = express.Router();

module.exports = { router };
