const router = require('express').Router()
const Author = require('../models/Author.model')


// Ver autores
router.get('/', (req, res) => {
    Author.find()
        .then(authors => res.status(200).json(authors))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving authors", err }))
})

//Ver detalles de un autor
router.get('/:id', (req, res) => {
    const { id } = req.params
    Author.findById(id)
        .then(author => res.status(200).json({ author, message: "Author detail" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error retrieving a single author", err }))
})

//Crear un un autor
router.post("/create", (req, res) => {
    const { firstName, lastName } = req.body
    Author
        .create({ firstName, lastName })
        .then(author => res.status(200).json({ author, message: "Author created" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error submiting author", err }))
})

//actualiza un autor 
router.put('/:id/edit', (req, res) => {
    const { id } = req.params;
    Author
        .findByIdAndUpdate(id, req.body, { new: true })
        .then(author => res.status(200).json({ author, message: "Author edited" }))
        .catch(err => res.status(500).json({ code: 500, message: "Error editing", err }))
})

module.exports = router