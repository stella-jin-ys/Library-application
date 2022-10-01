const router = require("express").Router();
const Reference = require("../models/Reference");
const Category = require("../models/ Category");
const Item = require("../models/LibraryItem");

// Create Reference
router.post("/", async (req, res) => {
  const newReference = new Reference(req.body);
  try {
    const savedReference = await newReference.save();
    res.status(200).json(savedReference);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get All references
router.get("/", async (req, res) => {
  const categoryName = req.query.categoryId;
  const itemType = req.query.type;
  try {
    let references;
    if (categoryId) {
      references = await Reference.find({ categoryId });
    } else if (type) {
      references = await Reference.find({ type });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
