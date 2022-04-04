import mongoose, { Schema } from "mongoose";
const postsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
}, { timestamps: true });
export default mongoose.model("Posts", postsSchema);