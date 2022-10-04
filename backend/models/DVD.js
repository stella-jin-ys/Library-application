const mongoose = require("mongoose");

const DVDSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    runtimeMinutes: {
      type: String,
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
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("DVD", DVDSchema);
