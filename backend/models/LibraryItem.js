const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
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
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
