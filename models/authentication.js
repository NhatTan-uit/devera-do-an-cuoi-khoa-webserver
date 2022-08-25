const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId: { type: String },
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    userEmail: { type: String },
    userImg: { type: String },
    phoneNumber: { type: String },
})

const Users = mongoose.model("Users", userSchema);

module.exports = Users;