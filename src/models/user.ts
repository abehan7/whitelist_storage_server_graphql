import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  wallet_address: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  isAdmin: { type: Boolean, default: false },
});

const User = mongoose.model<mongoose.Document>("users", userSchema);

export default User;
