const mongoose = require("mongoose");
const validator = require("validator");


const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please fill your name"],
  },
  phone: {
    type: String,
    required: [true, "Please fill your phone"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^\d{10}$/.test(v);  // Validates that the phone number is exactly 10 digits
      },
      message: props => `${props.value} is not a valid 10-digit phone number`
    }
  },
  entry_time: {
    type: Date,
    required: [true, 'Entry time is required'],
  },
  exit_time: {
    type: Date,
    required: [true, 'Exit time is required'],
    // validate: {
    //   validator: function (v) {
    //     return v > this.entryTime; 
    //   },
    //   message: 'Exit time must be after entry time'
    // }
  },
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});



const User = mongoose.model("User", userSchema);
module.exports = User;
