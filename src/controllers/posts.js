import Posts from "../models/posts";
export const list = async(req, res) => {
    try {
        const posts = await Posts.find().exec();
        res.json(posts);
    } catch (error) {
        res.status(400).json({
            message: "Khong lay dc list post"
        })
    }
}
export const add = async(req, res) => {
    try {
        const posts = await new Posts(req.body).save();
        res.json(posts);

    } catch (error) {
        res.status(400).json({
            message: "Khong them dc bai viet"
        })
    }
}
export const update = async(req, res) => {
    try {
        const post = await Posts.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).exec();
        res.json(post)
    } catch (error) {
        res.status(400).json({
            message: "khong update dc post"
        })
    }
}