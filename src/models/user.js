import mongoose from "mongoose";
const userScheme = mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    // email: {
    //     type: String,
    //     required: true,
    // },
    // password: {
    //     type: Number,
    //     required: true
    // },

}, { timestamps: true })
export default mongoose.model('User', userScheme);