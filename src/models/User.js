// user.js

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    age: Number,
    password: String,
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cart",
    },
    role: {
        type: String,
        default: "user",
    },
    documents: [{
        name: String,
        reference: String,
    }, ],
    last_connection: Date,
    documentProcessingComplete: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("User", userSchema);