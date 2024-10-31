import express from "express"
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();

app.use(express.json())

app.use(rootRoutes)

app.listen(8081, () => {
    console.log("Starting with port 8081")
})