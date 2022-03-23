import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { createHmac } from "crypto";
const uersChema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

uersChema.methods = {
    encryptPassword(password) {
        if (!password) return;
        try {
            return createHmac('sha256', this.salt).update(password).digest('hex');

        } catch (error) {
            console.log(error)
        }
    }
}
uersChema.pre("save", async function save(next) {
    try {
        this.salt = uuidv4();
        this.password = this.encryptPassword(this.password);
        return next();
    } catch (error) {
        return next(error);
    }
})
export default mongoose.model("User", uersChema)