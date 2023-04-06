const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 7000



const mongoDB = "mongodb://localhost:27017/seeds";

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}






app.listen(port, () => {
    console.log(`Seeds Here on ${port}`)
});