const express = require("express");
const router = express.Router();

const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenhandler");

// Make sure that all routes are private for registered users
router.use(validateToken);

// GET
router.route("/").get(getContacts);
router.route("/:id").get(getContact);

// POST
router.route("/").post(createContact);

// PUT
router.route("/:id").put(updateContact);

// DELETE
router.route("/:id").delete(deleteContact);


module.exports = router;