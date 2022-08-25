const express = require("express");
const router = express.Router();
const Users = require('../models/authentication');

//REQUEST GET ALL USERS FOR ADMIN
router.get("/", (req, res) => {
    Users.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json(`Error: ${err}`))
});

//REQUEST GET USER AFTER LOGGED IN
router.post("/login", (req, res) => {
    Users.findOne({ userId: req.body.userId })
        .then(user => {
            if (user) {
                res.json(user);
            }
            else {
                res.json("Not register");
            }
        })
        .catch(err => res.status(400).json(`Error: ${err}`));
});

//REQUEST FOR ADD USER PROFILE
router.post("/add", (req, res) => {
    const newUser = new Users({
        userId: req.body.userId,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userEmail: req.body.userEmail,
        userImg: req.body.userImg,
        phoneNumber: req.body.phoneNumber
    })

    newUser.save()
        .then(() => res.json("Posted Successfully"))
        .catch(err => res.status(400).json(`Error: ${err}`))
});


module.exports = router;