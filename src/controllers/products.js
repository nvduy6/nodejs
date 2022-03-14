// import mongoose from "mongoose";
// const products = [{ id: 1, name: "product" }, { id: 2, name: "productB" }, ];
// const Product = mongoose.model('Product', { name: String });
import Product from "../models/product";
export const list = async(req, res) => {

    // get all
    try {
        const products = await Product.find().exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Them moi thanh cong"
        })
    }
}
export const get = async(req, res) => { // get a product
    try {
        const products = await Product.findOne({ _id: req.params.id }).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Thêm sản phẩm không thành công"
        })
    }
}
export const create = async(req, res) => {
    // create product
    try {
        const product = await new Product(req.body).save();
        res.json(product);
    } catch (error) {
        res.status(400).json({
            message: "Them san pham thanh cong"
        })
    }

}

export const remove = async(req, res) => {
    // delete product
    try {
        const products = await Product.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Xoa thanh cong"
        })
    }
}
export const update = async(req, res) => {
    // update product 
    const condition = { _id: req.params.id };
    const update = req.body;
    const optional = { new: true }
    try {
        const products = await Product.findOneAndUpdate(condition, update, optional).exec();
        res.json(products);
    } catch (error) {
        res.status(400).json({
            message: "Cap nhat thanh cong"
        })
    }
}