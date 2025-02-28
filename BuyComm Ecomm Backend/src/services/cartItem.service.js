const CartItem = require('../models/cartItem.model');
const userService = require('../services/user.service.js');

async function updateCartItem(userId, cartItemId, cartItemData) {
    try {
        const item = await findCartItemById(cartItemId);
        const user = await userService.findUserById(item.userId);

        if (!item) {
            throw new Error("Cart item not found: " + cartItemId);
        }
        if (!user) {
            throw new Error("User not found: " + userId);
        }
        if (user._id.toString() === userId.toString()) {
            const quantity = cartItemData.quantity;

            if (!quantity || quantity <= 0) {
                throw new Error("Quantity must be a positive number");
            }

            item.quantity = quantity;
            
            if (item.product && item.product.price) {
                item.price = item.quantity * item.product.price;
                item.discountedPrice = item.quantity * (item.product.discountedPrice || item.product.price);
            } else {
                throw new Error("Product price is missing or invalid");
            }

            const updatedCartItem = await item.save();
            return updatedCartItem;
        } else {
            throw new Error("You cannot update this cart item");
        }
    } catch (error) {
        throw new Error(error.message);
    }
}


async function removeCartItem(userId, cartItemId) {
    const cartItem = await findCartItemById(cartItemId);
    const user = await userService.findUserById(userId);

    if (user._id.toString() === cartItem.userId.toString()) {
        return await CartItem.findByIdAndDelete(cartItemId);
    }
    throw new Error("you cannot remove another userItem")
}

async function findCartItemById(cartItemId) {
    const cartItem = await CartItem.findById(cartItemId).populate("product");
    if (cartItem) {
        return cartItem;
    }
    else {
        throw new Error("cart item not found with id : ", cartItemId);
    }
}

module.exports = { updateCartItem, removeCartItem, findCartItemById }
