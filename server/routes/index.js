const router = require("express").Router();
const booksRouter = require('./books.routes')
const authorRouter = require('./authors.routes')



router.use("/books", booksRouter);
router.use("/authors", authorRouter);

module.exports = router;
