const mongoose = require("mongoose");

const GymMemberSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  createdAt: { type: Date, default: Date.now }, // Store registration date and time
});

// Model
const MemberModel = mongoose.model("GymMember", GymMemberSchema);
module.exports = MemberModel;
