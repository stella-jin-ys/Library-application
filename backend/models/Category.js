const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },
    dvd: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DVD",
    },
    audioBook: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AudioBook",
    },
    reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Reference",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Category", CategorySchema);
