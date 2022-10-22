const router = require("express").Router();
const Item = require("../models/LibraryItem");
const Book = require("../models/Book");

//Create Item
router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All items
router.get("/", async (req, res) => {
  try {
    const books = await Book.find().select("book");
    console.log(books);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
