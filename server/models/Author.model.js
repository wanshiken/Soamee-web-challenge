const { Schema, model } = require("mongoose");


const authorSchema = new Schema(
  {

    firstName: {
      type: String,
    },

    lastName: {
      type:String,
    }

  },

  {
    timestamps: true,
  }
);

const Author = model("Author", authorSchema);

module.exports = Author;
