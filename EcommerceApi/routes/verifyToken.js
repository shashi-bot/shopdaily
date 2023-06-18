
const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next)=>{
    const token = req.header("x-auth-token");
    if (!token)
    return res.status(401).send("Access denied. Not authenticated...");
  try {
    const jwtSecretKey = process.env.JWT_SEC;
    const decoded = jwt.verify(token, jwtSecretKey);

    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid auth token...");
  }

};
const verifyTokenAndAuth =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.id===req.params.id || req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("not allowed");
        }
    });
};
const verifyTokenAndAdmin =(req,res,next)=>{
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("not allowed");
        }
    });
};
module.exports ={verifyToken,verifyTokenAndAuth,verifyTokenAndAdmin};
