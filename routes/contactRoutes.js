const express = require("express");
const router = express.Router();

const {
    getContacts,
    getContact,
    createContact,
    updateContact,
    sendMoney,
    deleteContact } = require("../controllers/contactController");

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