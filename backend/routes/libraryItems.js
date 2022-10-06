const router = require("express").Router();
const Item = require("../models/LibraryItem");

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

// Ger All items
router.get("/", async (req, res) => {
  const itemId = req.params.id;
  try {
    const items = await Item.find({ _id: itemId })
      .populate("book")
      .populate("dvd")
      .exec();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
