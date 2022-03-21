import mongoose from "mongoose";
const uersChema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    }
}, { timestamps: true })
export default mongoose.model("User", uersChema)