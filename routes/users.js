const express = require("express");
const {users} = require("../data/users.json");
const { UserModel, BookModel } = require("../modals");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controllers/user-controller");

const router = express.Router();

/**
 * Route: /users
 * Method: GET
 * Decsription: Get all users
 * Access: Public
 * Paramaters: None
 */
router.get('/', getAllUsers)

/**
 * Route: /users/:id
 * Method: GET
 * Decsription: Get user by their ID
 * Access: Public
 * Paramaters: ID
 */
router.get('/:id', getSingleUserById);

/**
 * Route: /users
 * Method: POST
 * Decsription: Create/Add a new user
 * Access: Public
 * Paramaters: None
 */
router.post('/', createNewUser);

/**
 * Route: /users/:id
 * Method: PUT
 * Decsription: Updating a user by their id
 * Access: Public
 * Paramaters: ID
 */
router.put('/:id', updateUserById)

/**
 * Route: /users/:id
 * Method: DELETE
 * Decsription: Delete a user by ID
 * Access: Public
 * Paramaters: ID
 */
router.delete('/:id', deleteUser);


/**
 * Route: /users/subscription-details/:id
 * Method: GET
 * Decsription: Get all user subscription details by their ID
 * Access: Public
 * Paramaters: ID
 */
router.get('/subscription-details/:id', getSubscriptionDetailsById);

// default export
module.exports = router;