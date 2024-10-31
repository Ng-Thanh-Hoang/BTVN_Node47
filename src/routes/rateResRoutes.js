import express from "express"
import { rateRes, rateResByResId, rateResByUserId } from "../controllers/rateRes.controller.js";

const rateResRoutes = express.Router();

rateResRoutes.post("/rate-res", rateRes)
rateResRoutes.get("/rate-res/:res_id", rateResByResId)
rateResRoutes.get("/rate-user/:user_id", rateResByUserId)

export default rateResRoutes