require("dotenv").config();
const express = require("express");
const router =require("express").Router();
const stripe = require("stripe");
const Order = require("../models/Order");
const Stripe =stripe('stripe key');

router.post("/payment", async (req, res) => {
  const customer =await Stripe.customers.create({
    metadata:{
      userId:req.body.userId,
     
    },
  });
   const line_items =req.body.cartItems.map(item =>{
    return {
      price_data: {
        currency: 'inr',
        product_data: {
          name: item.title,
          images:[item.img],
          description: item.desc,
          metadata:{
            id: item._id
          },
        },
        unit_amount: item.price*100,
      },
      quantity: item.quantity,

    };
   });
  const session = await Stripe.checkout.sessions.create({
    shipping_address_collection: {
      allowed_countries: ['IN'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 0,
            currency: 'inr',
          },
          display_name: 'Free shipping',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 5,
            },
            maximum: {
              unit: 'business_day',
              value: 7,
            },
          },
        },
      },
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: {
            amount: 1500,
            currency: 'inr',
          },
          display_name: 'Next day air',
          delivery_estimate: {
            minimum: {
              unit: 'business_day',
              value: 1,
            },
            maximum: {
              unit: 'business_day',
              value: 1,
            },
          },
        },
      },
    ],
    customer:customer.id,
    line_items,
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/checkout-success`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
  });

  res.send({url:session.url});
});

//Create order
const createOrder =async(customer,data,lineItems)=>{

  const newOrder =new Order({
    userId:customer.metadata.userId,
    customerId:data.customer,
    paymentIntentId:data.payment_intent,
    products:lineItems.data,
    amount:data.amount_total,
    address:data.customer_details,
    payment_status:data.payment_status,
  });
  try{
   const savedOrder = await newOrder.save(); 
   console.log("processed order:",savedOrder);
   //email

  }catch(err){
    console.log(err);
  }
};
//stripe webhook
// This is your Stripe CLI webhook secret for testing your endpoint locally.
let endpointSecret;
// endpointSecret = "whsec_efe7b6c33216948f86109da2701b8f8553c24598f0d996f3cfb3bb1e2d8bed33";

router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];
  let data;
  let eventType;

 if(endpointSecret){
  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook Error: ${err.message}`);
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }
  data =event.data.object;
  eventType=event.type;
}
  else{
       data=request.body.data.object;
       eventType=request.body.type;
  }

  // Handle the event
  if(eventType==="checkout.session.completed"){
           Stripe.customers.retrieve(data.customer).then(
            (customer)=>{
              Stripe.checkout.sessions.listLineItems(
                   data.id,
                {},
                function(err, lineItems) {
                  console.log("line_items",lineItems);
                  createOrder(customer,data,lineItems);
                }
              );
             
           
            }
           ).catch(err=>console.log(err.message));
  }
  // switch (event.type) {
  //   case 'payment_intent.succeeded':
  //     const paymentIntentSucceeded = event.data.object;
  //     // Then define and call a function to handle the event payment_intent.succeeded
  //     break;
  //   // ... handle other event types
  //   default:
  //     console.log(`Unhandled event type ${event.type}`);
  // }

  // Return a 200 response to acknowledge receipt of the event
  response.send().end();
});
  

module.exports=router;
