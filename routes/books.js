const express = require("express");

// Controllers
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById,  } = require("../controllers/book-controller");

// Data import
const {books} = require("../data/books.json");
const {users} = require("../data/users.json");
// const { route } = require("./users");

// const {UserModel, BookModel} = require("../modals/index")
const {UserModel, BookModel} = require("../modals");

// Local Router
const router = express.Router();

/**
 * Route: /books
 * Method: GET
 * Decsription: Get All Books
 * Access: Public
 * Paramaters: None
 */

router.get("/", getAllBooks)

/**
 * Route: /books/:id
 * Method: GET
 * Decsription: Get Book By Its Id
 * Access: Public
 * Paramaters: ID
 */
// getSingleBookById
router.get("/:id", getSingleBookById);

/**
 * Route: /books/issued/by-user
 * Method: GET
 * Decsription: Get all issued books
 * Access: Public
 * Paramaters: None
 * getAllIssuedBooks
 */
router.get("/issued/by-user", getAllIssuedBooks);

/**
 * Route: /books
 * Method: POST
 * Decsription: Create/Add a new Book
 * Access: Public
 * Paramaters: None
 * Data: Author, Name, Genre, Price, Publisher, Id
 */
router.post("/", addNewBook);

/**
 * Route: /books/:id
 * Method: PUT
 * Decsription: Update a Book By Its ID 
 * Access: Public
 * Paramaters: Id
 */
router.put("/:id", updateBookById);

// Default Export
module.exports = router;