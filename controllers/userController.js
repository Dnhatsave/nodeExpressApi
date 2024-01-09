const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//@desc Register User
//@rotue POST /api/users/register
//@access private
const registerUser =asyncHandler( async (req, res) => {
    const {username, email, password } = req.body;

    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are required");
    }

    const userAvaliable = await User.findOne({email});
    if(userAvaliable){
        res.status(400);
        throw new Error("User already registered");
    }

    // Hash the password
    const hasedPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password: hasedPassword,
    });

    if(user){
        res.status(201).json({_id: user._id,email: user.email});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }
});

//@desc Login User
//@rotue POST /api/users/login
//@access private
const loginUser =asyncHandler( async (req, res) => {
    const {email, password} = req.body;
    if(!email || !password){
        restart.status(400);
        throw new Error("All fields are required");
    }

    const user = await User.findOne({email});
    // Compare password with hased password
    if(user && ( await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                username: user.username,
                email: user.email,
                id: user.id,
            },
        },
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "10m"})
        res.status(200).json({accessToken})
    }else{
        res.status(401);
        throw new Error("Email Or Password Invalid")
    }
});

//@desc Current User Info
//@rotue POST /api/users/current
//@access private
const currentUser =asyncHandler( async (req, res) => {
    res.json(req.user);
});

module.exports = {registerUser, loginUser, currentUser};