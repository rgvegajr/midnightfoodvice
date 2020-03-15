const mongoose = require("mongoose");
// const crypto = require('crypto');//built into nodejs

const truckSchema = new mongoose.Schema(
{
   truck_id: Number,
   name: String,
   address: String,
   zipcode: Number,
   hoursMon: String,
   hoursTue: String,
   hoursWed: String,
   hoursThu: String,
   hoursFri: String,
   hoursSat: String,
   hoursSun: String,
   phone_number: String,
   email_address: String,
   website_url: String,
   image_url: String,
   currentLocation: String,
   owner: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
   username: String,
   }
});

module.exports = mongoose.model("Truck", truckSchema);

