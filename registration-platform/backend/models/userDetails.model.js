const mongoose = require('mongoose');

const UserDetailsSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter name"],
        },
        staffid: {
            type: Number, 
            required: true,
            default: 0,
        },
        email: {
            type: String,
            required: true
        },
        grade: {
            type: String,
            required: true
        },
        department: {
            type: String,
            required: true
        }
    }
)

const User = mongoose.model("User",UserDetailsSchema)

module.exports = User;