const { Author, Book } = require("../models/model");

const authorController = {
  addAuthor: async (req, res) => {
    try {
      const newAuthor = new Author(req.body);
      const savedAuthor = await newAuthor.save();
      res.status(200).json(savedAuthor);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAllAuthors: async (req, res) => {
    try {
      const allAuthors = await Author.find();
      res.status(200).json(allAuthors);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getAnAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id).populate("books");
      res.status(200).json(author);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  updateAuthor: async (req, res) => {
    try {
      const author = await Author.findById(req.params.id);
      await author.updateOne({ $set: req.body });
      res.status(200).json("Update author successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  deleteAuthor: async (req, res) => {
    try {
      await Book.updateMany({ author: req.params.id }, { author: null });
      await Author.findByIdAndDelete(req.params.id);
      //   await Book.updateOne({ author: req.params.id }, { $set: "" });
      res.status(200).json("Delete author successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = authorController;
