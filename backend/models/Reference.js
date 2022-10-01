const mongoose = require("mongoose");

const ReferenceSchema = new mongoose.Schema(
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
      type: String,
      default: "No",
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

module.exports = mongoose.model("Reference", ReferenceSchema);
