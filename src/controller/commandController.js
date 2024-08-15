const books = require("../../books");
const fs = require("fs");
const path = require("path");
class CommandController {
  contructor() {}
  async createBook(req, res, next) {
    const { title, author, year, genre } = req.body;

    if (!title || !author || !year || !genre) {
      throw new Error("Invalid Arguments");
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

    const booksFilePath = path.join(__dirname, "../../books.js");

    const fileContent = `module.exports = ${JSON.stringify(books, null, 2)};`;
    fs.writeFileSync(booksFilePath, fileContent, "utf8");

    console.log(books.books);
    return res.status(200).send(books.books);
  }

  async updateBook(req, res, next) {}
  async deleteBook(req, res, next) {}
}
module.exports = () => new CommandController();
