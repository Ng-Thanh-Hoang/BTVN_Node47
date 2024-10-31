import express from "express"
import { createOrder } from "../controllers/order.controller.js"

const rootOrder = express.Router()

rootOrder.post("/order",createOrder)

export default rootOrder