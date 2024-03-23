const express = require('express');
const router = express.Router();

const {createContact, getAllContacts, getContactById, updateContact, deleteContact} = require('../controllers/contactController');  


router.route ('/').get(getAllContacts);

router.route ('/:id').get(getContactById);

router.route ('/').post(createContact);

router.route ('/:id').put(updateContact);

router.route ('/:id').delete(deleteContact);




module.exports = router;