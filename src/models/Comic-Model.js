import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  yearOfPublication: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  numberOfPages: {
    type: Number,
    required: true,
  },
  condition: {
    type: String,
    enum: ["new", "used"],
    required: true,
  },
  description: {
    type: String,
    default: "",
    trim: true,
  },
});

const Book = mongoose.models.Books || mongoose.model("Books", BookSchema);

export default Book;
