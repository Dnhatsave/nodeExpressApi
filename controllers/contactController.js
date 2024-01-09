const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
//@desc Get all contacts
//@rotue GET /api/contacts
//@access public
const getContacts =asyncHandler( async (req, res) =>{
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//@desc get contact
//@rotue GET /api/contacts
//@access public
const getContact = asyncHandler( async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    res.status(200).json(contact);
});

//@desc Create New contact
//@rotue POST /api/contacts
//@access public
const createContact = asyncHandler( async (req, res) =>{

    console.log("The Body is: ",req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields must be mandatory");
    }

    const contact = await Contact.create({
        name, 
        email, 
        phone
    });
    res.status(201).json(contact);
});


//@desc Update contact
//@rotue PUT /api/contacts
//@access public
const updateContact = asyncHandler( async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }

    const updatedcontact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    res.status(200).json(updatedcontact);
});

//@desc Delete contact
//@rotue DELETE /api/contacts
//@access public
const deleteContact = asyncHandler(async (req, res) =>{

    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error('Contact not found');
    }
    await Contact.remove();
    res.status(200).json(contact);
});

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};


