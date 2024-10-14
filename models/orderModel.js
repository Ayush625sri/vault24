import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.Schema.Types.ObjectID,
        ref: "Products",
      },
    ],
    payment: {
      // type:String,
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Users",
    },
    status: {
      type: String,
      default: "Not Processed",
      enum: [
        "Not Processed",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancelled",
      ],
    },
  },
  { timestamps: true }
);
export default mongoose.model("Orders", orderSchema);
