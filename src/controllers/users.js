import User from "../models/user";
// import mongoose from "mongoose";
// const users = [{ id: 1, name: "Duy", email: "Duynvph15542@fpt.edu.vn", password: 12345 }, { id: 1, name: "Bach", email: "bachnvph15542@fpt.edu.vn", password: 345 }, ];
// const User = mongoose.model('User', { name: String }, { email: String }, { password: Number });
export const list = async(req, res) => {
    try {
        const users = await User.find().exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Tham moi thanh cong"
        })
    }
}
export const get = async(req, res) => {
    try {
        const users = await User.findOne({ _id: req.params.id }).exec();
        res.json(users);
    } catch (error) {
        res.status(400).json({
            message: "Lay san pham thanh cong"
        })
    }
}
export const create = async(req, res) => {
    try {
        const user = await new User(req.body).save();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Them san pham thanh cong"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Xoa thanh cong"
        })
    }

}
export const update = async(req, res) => {
    const condition = { _id: req.params.id };
    const update = req.body;
    const optional = {
        new: true
    }
    try {
        const user = await User.findOneAndUpdate(condition, update, optional).exec();
        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Cap nhat thanh cong"
        })
    }

}