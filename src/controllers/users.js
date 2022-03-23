import User from "../models/user";

export const signup = async(req, res) => {
    try {
        const { name, email, password } = req.body;
        // tai khoan co ton tai hay ko
        const existUser = await User.findOne({ email }).exec();
        if (existUser) {
            res.json({
                message: "Email da ton tai , vui long dang "
            })
        }
        const user = await new User({ name, email, password }).save();
        res.json({
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch (error) {
        res.json(400).json({
            message: "Khong tao duoc tai khoan"
        })
    }

}

export const signin = async(req, res) => {

}