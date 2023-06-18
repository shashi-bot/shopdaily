require("dotenv").config();
const router =require("express").Router();
const stripe = require("stripe");
const Stripe =stripe(process.env.STRIPE_KEY);


router.post("/check", (req, res) => {
    if (req.body.type === "payment_intent.created") {
      console.log(`${req.body.data.object.metadata.name} initated payment!`);
    }
    if (req.body.type === "payment_intent.succeeded") {
      console.log(`${req.body.data.object.metadata.name} succeeded payment!`);
    }
  });
module.exports=router;