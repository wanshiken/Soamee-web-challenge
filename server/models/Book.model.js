const { Schema, model } = require("mongoose");
const Author = require("./Author.model");


const bookSchema = new Schema(
    {

        name: {
            type: String,
        },

        isbn: {
            type: String,
        },

        author: {
            type: Schema.Types.ObjectId,
            ref: Author,
        },

    },

);

const Book = model("Book", bookSchema);

module.exports = Book;