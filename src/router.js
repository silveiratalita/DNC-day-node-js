const express = require("express");
const commandController = require("./controller/commandController");
const queryController = require("./controller/queryController");
const command = commandController();
const query = queryController();

const router = express.Router();
router.post("/create", command.createBook.bind(command));
router.put("/update/:id", command.updateBook.bind(command));
router.delete("/delete/:id", command.deleteBook.bind(command));

router.get("/books", query.index.bind(query));
router.get("/books/:id", query.getBookById.bind(query));
module.exports = { router };
