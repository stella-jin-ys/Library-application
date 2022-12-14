const router = require("express").Router();
const Book = require("../models/Book");

// Create book
router.post("/", async (req, res) => {
  const newBook = await new Book(req.body);
  try {
    const savedBook = await newBook.save();
    res.status(200).json(savedBook);
  } catch (err) {
    req.status(500).json(err);
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get("/category1", async (req, res) => {
  try {
    booksCat = await Book.find()
      .populate("category1")
      .exec((err, product) => {
        console.log(booksCat);
        res.status(200).json(books);
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get book
router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (book.length !== 0) {
      try {
        if (book) await book.delete();
        res.status(200).json("This book has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
