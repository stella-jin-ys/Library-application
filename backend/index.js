const express = require("express");
const app = express();
const PORT = 8000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookRoute = require("./routes/books");
const categoryRoute = require("./routes/categories");
const dvdRoute = require("./routes/dvds");
const audioBookRoute = require("./routes/audioBooks");
const referenceRoute = require("./routes/references");
const libraryItemsRoute = require("./routes/libraryItems");

const cors = require("cors");

dotenv.config();

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_DB, () =>
    console.log("DB connected")
  );
}
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

app.use(express.json());
app.use("/api/books", bookRoute);
app.use("/api/dvds", dvdRoute);
app.use("/api/audioBooks", audioBookRoute);
app.use("/api/references", referenceRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/libraryItems", libraryItemsRoute);

app.listen(PORT, () => {
  console.log("Backend is running");
});
