const books = require("../../books");
const fs = require("fs");
const path = require("path");
class CommandController {
  contructor() {}

  saveBooks() {
    const booksFilePath = path.join(__dirname, "../../books.js");
    const fileContent = `module.exports = ${JSON.stringify(books, null, 2)};`;
    fs.writeFileSync(booksFilePath, fileContent, "utf8");
  }

  async createBook(req, res, next) {
    const { title, author, year, genre } = req.body;

    if (!title || !author || !year || !genre) {
      return res.status(400).send("Invalid Arguments");
    }
    books.ids = books.ids + 1;
    const newBook = {
      id: books.ids,
      title,
      author,
      year,
      genre,
    };

    books.books.push(newBook);
    console.log(books.books);

    this.saveBooks();

    console.log(books.books);
    return res.status(200).send(books.books);
  }

  async updateBook(req, res, next) {
    const id = req.params.id;

    const { title, author, year, genre } = req.body;

    if (!id || !title || !author || !year || !genre) {
      return res.status(400).send("Invalid Arguments");
    }

    const bookIndex = books.books.findIndex((b) => b.id == id);
    if (bookIndex === -1) {
      return res.status(404).send("Book not found");
    }

    books.books[bookIndex] = { id, title, author, year, genre };
    this.saveBooks();
    return res.status(200).send(books.books[bookIndex]);
  }

  async deleteBook(req, res, next) {
    const id = req.params.id;
    const bookIndex = books.books.findIndex((b) => b.id == id);

    if (bookIndex === -1) {
      return res.status(404).send("Book not found");
    }

    books.books.splice(bookIndex, 1);
    this.saveBooks();
    return res.status(200).send(`Book with ID ${id} deleted`);
  }
}
module.exports = () => new CommandController();
