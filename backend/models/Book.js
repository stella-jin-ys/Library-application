const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema(
  {
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
    categoryId: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Book", BookSchema);
