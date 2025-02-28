const orderService = require('../services/order.service.js')

const createOrder = async (req, res) => {
    const user = await req.user;
    const shippAddress = req.body; // Correctly map the request body to shippAddress
    console.log("Request Body:", shippAddress);
    try {
        const createdOrder = await orderService.createOrder(user, shippAddress);

        // Remove circular reference
        const orderObject = createdOrder.toObject();
        if (orderObject.user) {
            delete orderObject.user.address;
        }

        res.status(201).json(orderObject);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
};


const findOrderById = async(req,res)=>{
    const user = req.user;
    try {
        let IdOrder = await orderService.findOrderById(req.params.id);
        res.status(201).send(IdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

const orderHistory = async(req,res)=>{
    const user = await req.user;
    try {
        let IdOrder = await orderService.orderHistory(user._id);
        res.status(201).send(IdOrder);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports={
    createOrder,findOrderById,orderHistory
}
