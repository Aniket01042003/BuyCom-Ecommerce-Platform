const Razorpay = require('razorpay');

const key_id = "rzp_test_sAfwNZzczSENsh";
const key_secret = "j6VTz44jtnKfQJi0527EPGJD";

const razorpay = new Razorpay({
  key_id: key_id,
  key_secret: key_secret,
});

module.exports=razorpay;