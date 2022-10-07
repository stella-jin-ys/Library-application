const router = require("express").Router();
const AudioBook = require("../models/AudioBook");

// Create audio book
router.post("/", async (req, res) => {
  const newAudio = await new AudioBook(req.body);
  try {
    const savedAudio = await newAudio.save();
    res.status(200).json(savedAudio);
  } catch (err) {
    req.status(500).json(err);
  }
});

// Get all audio books
router.get("/", async (req, res) => {
  try {
    audios = await AudioBook.find();
    res.status(200).json(audios);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get audio book
router.get("/:id", async (req, res) => {
  try {
    const audios = await AudioBook.findById(req.params.id);
    res.status(200).json(audios);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete book
router.delete("/:id", async (req, res) => {
  try {
    const audios = await AudioBook.findById(req.params.id);
    if (audios.length !== 0) {
      try {
        if (audios) await audios.delete();
        res.status(200).json("This audio book has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
