const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_DB, () =>
    console.log("DB connected")
  );
}

app.listen(PORT, () => {
  console.log("Backend is running");
});
