const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    books: {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      author: {
        type: String,
        required: true,
        unique: false,
      },
      pages: {
        type: Number,
        required: true,
        unique: false,
      },
      type: {
        type: String,
        require: true,
      },
      isBorrowable: {
        type: Boolean,
        required: true,
      },
      categories: {
        type: Array,
      },
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
