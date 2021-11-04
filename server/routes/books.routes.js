const router = require('express').Router()
const Book = require('../models/Book.model')


// Ver libros
router.get('/', (req, res) => {
    Book.find()
        .then(books => res.status(200).json(books))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving books", err }))
})

//Ver detalles de un libro
router.get('/:id', (req, res) => {
    const { id } = req.params
    Book.findById(id)
        .then(book => res.status(200).json({ book, message: "Book detail" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single book", err }))
})

//Crear un libro
router.post("/create", (req, res) => {
    const { name, isbn, author } = req.body
    Book
        .create({ name, isbn, author })
        .then(book => res.status(200).json({ book, message: "Book created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error submiting book", err }))
})

//actualiza un autor 
router.put('/:id/edit', (req, res) => {
    const { id } = req.params;
    Book
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(book => res.status(200).json({ book, message: "Book edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

module.exports = router