const bookController = require("../controllers/bookController");

const router = require("express").Router();

router.post("/add", bookController.addBook);
router.get("/get-all-books", bookController.getAllBooks);
router.get("/get-book/:id", bookController.getBook);

// update
router.put("/update-book/:id", bookController.updateBook);

router.delete("/delete-book/:id", bookController.deleteBook);

module.exports = router;
