const razorpay = require("../config/razorpayClient.js");
const orderService = require("../services/order.service.js");


const createPaymentLink = async(orderId)=>{
    try {
        const order = await orderService.findOrderById(orderId);
        // console.log("order ", order);
        const paymentLinkRequest = {
            amount:(order.totalDiscountedPrice)*100,
            currency: "INR",
            customer:{
                name:order.user.firstName +" "+order.user.lastName,
                contact:order.user.mobile,
                emial:order.user.email
            },
            notify:{
                sms:true,
                email:true
            },
            reminder_enable: true,
            callback_url:`http://localhost:5173/payment/${orderId}`,
            callback_method:'get'
        }

        const paymentLink = await razorpay.paymentLink.create(paymentLinkRequest);

        const paymentLinkId = paymentLink.id;
        const payment_link_url = paymentLink.short_url;

        const resData = {
            paymentLinkId,
            payment_link_url
        }

        return resData;

    } catch (error) {
        throw new Error(error.message);
    }
}

const updatePaymentInformation = async (reqData) => {
    const paymentId = reqData.payment_id;
    const orderId = reqData.order_id;

    try {
        const order = await orderService.findOrderById(orderId);

        const payment = await razorpay.payments.fetch(paymentId);

        if(payment.status = "captured"){
            order.paymentDetails,paymentId = paymentId;
            order.paymentDetails.status = "COMPLETED";
            order.orderStatus="Placed";
            await order.save();
        }

        const resData = {message:"Your order is Placed", success:true}

        return resData;


    } catch (error) {
        throw new Error(error.message);
    }
}


module.exports={
    createPaymentLink,updatePaymentInformation
}


