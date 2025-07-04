const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// passport-local-mongoose will handle the hashing of the password
const UserSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            require: [true, "Please enter a First name"],
        },
        lastName: {
            type: String,
            require: [true, "Please enter a Last name"],
        },
        email: {
            type: String,
            require: [true, "Please enter am email address"],
        },
        // password: {
        //     type: String,
        //     require: [true, "Please enter a password"],
        // },
    },
    { timestamps: true }
);

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", UserSchema);

module.exports = User;
