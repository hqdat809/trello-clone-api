const router = require("express").Router();
const authorController = require("../controllers/authorController");

router.post("/add", authorController.addAuthor);
router.get("/get-all-authors", authorController.getAllAuthors);
router.get("/get-an-author/:id", authorController.getAnAuthor);

router.put("/update-author/:id", authorController.updateAuthor);

router.delete("/delete-author/:id", authorController.deleteAuthor);

module.exports = router;
