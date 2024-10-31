import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize'; //Operator

//tạo ob model đại diện cho tất cả model của orm
const model = initModels(sequelize)

const likeResByResId = async (req, res) => {
    try {
        let { res_id } = req.params;
        let data = await model.like_res.findAll({
            where: {
                res_id: res_id,
            }
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: "Error for api get like res" })
    }
}

const likeResByUserId = async (req, res) => {
    try {
        let { user_id } = req.params;
        let data = await model.like_res.findAll({
            where: {
                res_id: user_id,
            }
        })
        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({ message: "Error for api get like res" })
    }
}

const likeRes = async (req, res) => {
    try {
        let { user_id, res_id} = req.body
        const data = await model.like_res.create({
            user_id, res_id
        })
        return res.status(201).json({ message: "Like successfully" })
    } catch (error) {
        return res.status(500).json({ message: "error likeRes" })
    }
}

const disLikeRes = async (req, res) => {
    try {
        let { user_id, res_id} = req.body;
        await model.like_res.destroy({
            where: {
                user_id,
                res_id
            }
        });
        return res.status(201).json({ message:" dislike successfully" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export {
    likeResByResId,
    likeResByUserId,
    likeRes,
    disLikeRes
}