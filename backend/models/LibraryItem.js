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

    categories: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
