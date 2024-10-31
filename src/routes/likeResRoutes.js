import express from "express"
import { likeResByResId, likeResByUserId, likeRes, disLikeRes } from "../controllers/likeRes.controller.js";

const likeResRoutes = express.Router();

likeResRoutes.get("/like-res/:res_id",likeResByResId);
likeResRoutes.get("/like-user/:user_id",likeResByUserId);
likeResRoutes.post("/like",likeRes);
likeResRoutes.delete("/dislike",disLikeRes);

export default likeResRoutes