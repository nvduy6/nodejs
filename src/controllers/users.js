import User from "../models/user";
export const list = async(req, res) => {
    const user = await User.find().exec();

}