import express from "express";
import  connection  from "./config/db.js";
import dotenv from "dotenv";
import userRouter from "./route/user.route.js";
import cors from "cors";
import { router } from "./route/product.route.js";
import razorRouter from "./route/razor.route.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors({
    origin: '*'
}))

app.use(express.json());
app.use("/user", userRouter)
app.use('/product',router)
app.use('/razor', razorRouter)

app.get("/", (req, res)=>{
    res.send("Hello World");
});


app.listen(PORT, async()=>{
    try {
        await connection
        console.log(`Server is running on port ${PORT} and db is also connnected`);
    } catch (error) {
        console.log("Error in the Server",error);
    }
})

