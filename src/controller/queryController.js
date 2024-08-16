const books = require("../../books");
const fs = require("fs");
const path = require("path");
class QueryController {
  contructor() {}

  async index(req, res, next) {
    return res.status(200).send(books.books);
  }
  async getBookById(req, res, next) {
    const id = parseInt(req.params.id, 10);

    if (isNaN(id)) {
      return res.status(400).send("Invalid ID format");
    }

    const book = books.books.find((b) => b.id === id);

    if (!book) {
      return res.status(404).send("Book not found");
    }

    return res.status(200).send(book);
  }
}
module.exports = () => new QueryController();
