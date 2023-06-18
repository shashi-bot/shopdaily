const router =require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const Joi = require("joi");
const CryptoJs = require("crypto-js");
//Register

router.post("/register",async(req,res)=>{
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: CryptoJs.AES
      .encrypt(req.body.password,process.env.PASS_SEC)
      .toString()

    });
    try{
  const savedUser = await newUser.save();
  const token = jwt.sign({
    _id:savedUser._id,
    name:savedUser.name,
    email:savedUser.email, 
  
},process.env.JWT_SEC,{expiresIn:"3d"});
  res.status(201).json(token);}
  catch(err){
   res.status(500).json(err);
  }
});
//LOGIN
router.post("/login",async(req,res)=>{
   try{ const user = await User.findOne({name:req.body.name});
   !user && res.status(401).json("wrong credential");
const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC);
const Orgpassword = hashedPassword.toString(CryptoJs.enc.Utf8);
Orgpassword !==req.body.password && res.status(401).json("wrong credential");

const token = jwt.sign({
    _id:user._id, 
    name:user.name,
    email:user.email, 
    isAdmin:user.isAdmin,
},process.env.JWT_SEC,{expiresIn:"3d"});

res.status(201).json(token);
}
   catch(err){
       res.status(500).json(err)
   }
});

module.exports = router;
