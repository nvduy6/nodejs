import Slider from "../models/slider";
export const list = async(req, res) => {
    try {

        const slider = await Slider.find().exec();
        res.json(slider)
    } catch (errors) {
        res.status(400).json({ message: "Ko lay đc anh" })
    }
}
export const add = async(req, res) => {
    try {
        const slider = await new Slider(req.body).save();
        res.json(slider);
    } catch (error) {
        res.status(400).json({
            message: "Ko ad đc anh"
        })
    }
}
export const remove = async(req, res) => {
    try {
        const slider = await Slider.findOneAndDelete({ _id: req.params.id }).exec();
        res.json(slider);
    } catch (error) {
        res.status(400).json({
            message: "Khong xoa dc"
        })
    }
}