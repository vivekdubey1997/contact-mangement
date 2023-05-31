const express = require("express");
const router = express.Router();
const {
getContacts,
createContact,
getContact,
updateContact,
deleteContact,
searchContacts,
} = require("../controllers/contactController");

router.route("/:key").get(searchContacts)
router.route("/").post(createContact).get(getContacts)

router.route("/:id").get(getContact).put(updateContact).delete(deleteContact)

module.exports = router;
