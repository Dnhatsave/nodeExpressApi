//@desc Get all contacts
//@rotue GET /api/contacts
//@access public
const getContacts = (req, res) =>{
    res.status(200).json({message: "Get all contacts"});
}

//@desc get contact
//@rotue GET /api/contacts
//@access public
const getContact = (req, res) => {
    res.status(200).json({message: "Get contact for id: " + req.params.id});
}

//@desc Create New contact
//@rotue POST /api/contacts
//@access public
const createContact = (req, res) =>{
    res.status(201).json({message: "Create contacts"});
}


//@desc Update contact
//@rotue PUT /api/contacts
//@access public
const updateContact = (req, res) =>{
    res.status(200).json({message: "Update contact for id: " + req.params.id});
}

//@desc Delete contact
//@rotue DELETE /api/contacts
//@access public
const deleteContact = (req, res) =>{
    res.status(200).json({message: "Delete contact for id: " + req.params.id});
}

module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact
};