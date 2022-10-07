const router = require("express").Router();
const Reference = require("../models/Reference");

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
  try {
    references = await Reference.find();
    res.status(200).json(references);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get reference
router.get("/:id", async (req, res) => {
  try {
    const reference = await Reference.findById(req.params.id);
    res.status(200).json(reference);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const reference = await Reference.findById(req.params.id);
    if (reference.length !== 0) {
      try {
        if (reference) await reference.delete();
        res.status(200).json("This reference has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
