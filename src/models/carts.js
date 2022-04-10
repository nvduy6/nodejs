import mongoose, { Schema } from "mongoose";
const cartSchema = new Schema({
    sl: {
        type: Number
    },
    product: {
        type: Object,
        ref: "Product"
    },
    user: {
        type: Object,
        ref: "User"
    }

})
export default mongoose.model('Cart', cartSchema);