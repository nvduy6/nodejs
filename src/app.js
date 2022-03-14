import express from 'express'
import mongoose from 'mongoose'
import productRouter from './routes/product';
const admin = require('./routes/user');
const app = express();
// middleware
app.use(express.json());

//Routing
app.use("/api", productRouter);
app.use("/api", admin);
// connect database
mongoose.connect("mongodb://localhost:27017/we16306")
    .then(() => console.log("Connect db thanh cong"))

//Connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Sever running port 3001`)
})