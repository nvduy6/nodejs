import mongoose, { Schema } from "mongoose";
const sliderSchema = new Schema({
    name: {
        type: String
    }
}, { timestamps: true });
export default mongoose.model("Slider", sliderSchema);