const express = require('express');
const productRouter = require('./routes/product');
const app = express();
// middleware
app.use(express.json());

//Routing
app.use("/api", productRouter);
// app.get("/", (req, res) => {
//     res.send("<h1>Home page</h1>");
// });

//Connect
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Sever running port 3001`)
})