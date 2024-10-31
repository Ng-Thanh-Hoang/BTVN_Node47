import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { Op, where } from 'sequelize'; //Operator

//tạo ob model đại diện cho tất cả model của orm
const model = initModels(sequelize)

const createOrder = async (req,res) =>{
    try{
        let{food_id,user_id,amount,arr_sub_id} = req.body;
        const data = await model.orders.create({
            food_id,
            user_id,
            amount,
            arr_sub_id
        })
        return res.status(201).json({message:"create order successfully"})
    }catch(error){
        return res.status(200).json({message:"create order successfully"})

    }
}

export{
    createOrder
}