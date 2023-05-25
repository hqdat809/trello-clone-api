const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  publishedDate: {
    type: String,
  },
  genres: {
    type: [String],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

const authorSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  year: {
    type: Number,
  },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
});

const userSchema = new Schema(
  {
    username: {
      type: String,
      require: true,
      minlength: 6,
      maxlength: 20,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      minlength: 10,
      maxlength: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 6,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

let Book = mongoose.model("Book", bookSchema);
let Author = mongoose.model("Author", authorSchema);
let User = mongoose.model("User", userSchema);

module.exports = { Book, Author, User };
