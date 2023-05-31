const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
        type: String,
        required: [true, "Please add the contact name"],
      },
      phone: {
        type: String,
        required: [true, "Please add the contact phone number"],
        unique: [true, "phone number already exist"],
      },
    },
    {
      timestamps: true,
    }
  );


  module.exports = mongoose.model("Contact", contactSchema);