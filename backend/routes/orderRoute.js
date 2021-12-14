import { Router } from "express";
import Stripe from "stripe";
import Order from "../models/Order";

const route = Router();
route.post("/newOrder", async (req, res) => {
  let new_order = new Order(req.body);
  await new_order.save();
  res.json({ success: true, order: new_order });
});
route.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const stripe = Stripe(process.env.STRIPE_KEY);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
  // OK - Created
  res.status(201).json({
    clientSecret: paymentIntent.client_secret,
  });
});
route.get("/:userId/orders", async (req, res) => {
  let user_id = req.params.userId;
  let orders = await Order.find({ customer: user_id }).sort({ _id: -1 });
  res.json({ orders, success: true });
});
export default route;
