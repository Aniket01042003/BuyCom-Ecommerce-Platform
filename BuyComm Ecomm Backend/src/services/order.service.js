const Address = require("../models/address.model.js");
const cartService = require("../services/cart.service.js");
const OrderItem = require("../models/orderItems.js");
const Order = require("../models/order.model.js");

// async function createOrder(user, shippAddress) {
//     let address;
//     console.log("shippAddress ",user.address);
//     if (shippAddress._id) {
//         let existAddress = await Address.findById(shippAddress._id);
//         console.log("shiId1 ",address)
//         address = existAddress;
//     } else {
//         address = new Address(shippAddress);
//         console.log("shiId ",address)
//         address.user = user;
//         await address.save();
//         // console.log("user.addresses ", user.addresses)
//         user.address.push(address);
//         await user.save();
//     }

//     const cart = await cartService.findUserCart(user._id);
//     const orderItems = [];

//     for (const item of cart.cartItems) {
//         const orderItem = new OrderItem({
//             price: item.price,
//             product: item.product,
//             quantity: item.quantity,
//             size: item.size,
//             userId: item.userId,
//             discountedPrice: item.discountedPrice,
//         })
//         const createdOrderItem = await orderItem.save();
//         orderItems.push(createdOrderItem);
//     }

//     const createdOrder = new Order({
//         user,
//         orderItems,
//         totalPrice: cart.totalPrice,
//         totalDiscountedPrice: cart.totalDiscountedPrice,
//         discounte: cart.discounte,
//         totalItem: cart.totalItem,
//         shippingAddress: address,
//     });
//     const savedOrder = await createdOrder.save();
//     return savedOrder;

// }
async function createOrder(user, shippAddress) {
    let address;

    console.log("User 's existing addresses:", user.address);

    // Check if the user has existing addresses
    if (user.address.length > 0) {
        // Delete existing addresses
        await Address.deleteMany({ _id: { $in: user.address } });
        user.address = []; // Clear the user's address array
        console.log("Deleted existing addresses.");
    }

    // Create a new address
    address = new Address(shippAddress);
    console.log("New Address to be saved:", address);
    address.user = user._id; // Associate the address with the user

    try {
        await address.save();
        console.log("New Address Created:", address);
        // Add the new address to the user's address array
        user.address.push(address._id);
        await user.save();
    } catch (error) {
        console.error("Error saving address:", error);
        throw new Error("Failed to save address");
    }

    const cart = await cartService.findUserCart(user._id);
    const orderItems = [];

    for (const item of cart.cartItems) {
        const orderItem = new OrderItem({
            price: item.price,
            product: item.product,
            quantity: item.quantity,
            size: item.size,
            userId: item.userId,
            discountedPrice: item.discountedPrice,
        });
        const createdOrderItem = await orderItem.save();
        orderItems.push(createdOrderItem);
    }

    const createdOrder = new Order({
        user: user._id, // Ensure you are saving the user ID
        orderItems,
        totalPrice: cart.totalPrice,
        totalDiscountedPrice: cart.totalDiscountedPrice,
        discounte: cart.discounte,
        totalItem: cart.totalItem,
        shippingAddress: address,
    });
    const savedOrder = await createdOrder.save();
    return savedOrder;
}

async function placeOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "PLACED";
    order.paymentDetails.status = "COMPLETED";
    return await order.save();
}

async function confirmedOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "CONFIRMED";
    return await order.save();
}

async function shipOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "SHIPPED";
    return await order.save();
}

async function deliverOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "DELIVERED";
    return await order.save();
}

async function canclledOrder(orderId) {
    const order = await findOrderById(orderId);
    order.orderStatus = "CANCELLED";
    return await order.save();
}

async function findOrderById(orderId) {
    const order = await Order.findById(orderId)
        .populate("user")
        .populate({ path: "orderItems", populate: { path: "product" } })
        .populate("shippingAddress")
    // console.log("orderService order ",order)
    return order;
}

async function usersOrderHistory(userId) {
    try {
        const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
            .populate({ path: "orderItems", populate: { path: "product" } }).lean()
        return orders;
    } catch (error) {
        throw new Error(error.message)
    }
}

async function getAllOrders(userId) {
    return await Order.find({ user: userId })
        .populate({ path: "orderItems", populate: { path: "product" } }).lean()
}
async function deleteOrder(orderId) {
    const order = await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id);
}

module.exports = {
    createOrder, placeOrder, confirmedOrder, shipOrder, deliverOrder, canclledOrder, findOrderById,
    usersOrderHistory, getAllOrders, deleteOrder
}

