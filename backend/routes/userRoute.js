import { Router } from "express";
import { error } from "../middleware/error/error";
import Order from "../models/Order";
import User from "../models/User";

const route = Router();
route.post("/login", async (req, res, next) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return next(error("Please enter your email & password", 400));
  }
  const user = await User.findOne({ name, password });
  if (!user) {
    return next(error("Invalid email or password", 401));
  }
  res.json({ succes: true, user });
});
route.post("/register", async (req, res) => {
  let new_user = new User(req.body);
  await new_user.save();
  res.json({ succes: true, user: new_user });
});
export default route;
