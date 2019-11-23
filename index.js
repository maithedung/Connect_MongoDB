const mongoose = require("mongoose");

const log = console.log;
const uris = "mongodb://localhost/maithedung";

mongoose.connect(
  uris,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    if (err) throw err;
    log("Successfully connected");
  }
);

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
});

const Athlete = mongoose.model("Athlete", BlogPost);

const book = new Athlete({ title: "book" });
