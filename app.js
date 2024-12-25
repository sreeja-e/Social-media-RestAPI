import express from "express";
import mongoose from "mongoose";
import router from "./routes/router.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();
app.use(express.json());

app.use("/api/user",router);
app.use("/api/blog",blogRouter);
mongoose
.connect(
    'mongodb+srv://admin:WmXmEA5wzqYSMMdc@cluster0.n8ayt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/Blog'
)
.then(()=> app.listen(5000))
.then(()=>
     console.log("connected to database")
)
.catch((err)=> console.log(err));
// WmXmEA5wzqYSMMdc