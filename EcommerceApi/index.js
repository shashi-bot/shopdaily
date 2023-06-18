const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
const userRoute =require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const checkRoute =require("./routes/check");
const cors = require("cors");
dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Db connection successsfull"))
.catch((err)=>{console.log(err);});
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);


const port = 5000;
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});