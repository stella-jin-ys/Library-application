const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    books: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    },

    dvds: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DVD",
    },
    audioBooks: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AudioBook",
    },

    references: {
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
