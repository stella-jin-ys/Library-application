const router = require("express").Router();
const DVD = require("../models/DVD");
const Category = require("../models/Category");

// Create DVD
router.post("/", async (req, res) => {
  const newDVD = await new DVD(req.body);
  try {
    const savedDVD = await newDVD.save();
    res.status(200).json(savedDVD);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all DVDs
router.get("/", async (req, res) => {
  const categoryId = req.query.category;
  const type = req.query.type;
  try {
    dvds = await DVD.find();
    res.status(200).json(dvds);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get dvd
router.get("/:id", async (req, res) => {
  try {
    const dvd = await DVD.findById(req.params.id);
    res.status(200).json(dvd);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete dvd
router.delete("/:id", async (req, res) => {
  try {
    const dvd = await DVD.findById(req.params.id);
    if (dvd.length !== 0) {
      try {
        if (dvd) await dvd.delete();
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
