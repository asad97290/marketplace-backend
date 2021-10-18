const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },

  is_email_verified: {
    type: Boolean,
    default: false,
  },

});

const UserCredentialsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  sms_and_email_auth_token: {
    
    type: String,
    // default: "sms_and_email_auth_token",
  },
  password: {
    type: String,
    required: true,
  }
});

let User = mongoose.model("user", UserSchema);
let UserCredential = mongoose.model("user_credential", UserCredentialsSchema);
module.exports = { User, UserCredential };
