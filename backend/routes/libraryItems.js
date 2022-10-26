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
  const category = req.query.category;
  try {
    let items;
    if (category) {
      items = await Item.find({
        categories: {
          $in: [category],
        },
      });
    } else {
      items = await Item.where("books").populate("title");
    }
    console.log(items);
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
