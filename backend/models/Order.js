import mongoose, { Schema } from "mongoose";
const schema = new Schema(
  {
    curtomer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    order_items: [
      {
        title: { type: String, required: true },
        price: { type: String, required: true },
        quantity: { type: String, required: true },
        image: String,
      },
    ],
    total_price: { type: Number, default: 0, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Order", schema);
