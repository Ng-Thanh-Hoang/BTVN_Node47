import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op } from 'sequelize'; //Operator

//tạo ob model đại diện cho tất cả model của orm
const model = initModels(sequelize)

const rateRes = async (req,res) =>{
    try{
        let {res_id,user_id,amount,date_rate} = req.body
        const data = await model.rate_res.create({
            res_id,
            user_id,
            amount,
            date_rate
        })
        return res.status(201).json({message:"create successfully"})
    }catch(error){
        return res.status(500).json({message:"error from server"})
    }
}

const rateResByResId = async (req,res) =>{
    try{
        let {res_id} = req.params
        let data = await model.rate_res.findAll({
            where: {
                res_id
            }
        })
        return res.status(200).json(data)
    }catch(error){
        return res.status(500).json({message:"error get rate-res by id"})
    }
}

const rateResByUserId = async (req,res) =>{
    try{
        let {user_id} = req.params
        let data = await model.rate_res.findAll({
            where: {
                user_id
            }
        })
        return res.status(200).json(data)
    }catch(error){
        return res.status(500).json({message:""})
    }
}

export {
    rateRes,
    rateResByResId,
    rateResByUserId
}