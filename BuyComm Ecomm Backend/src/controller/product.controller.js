const produxtService = require('../services/product.service');

const createProduct = async (req, res) => {
    try {
        const product = await produxtService.createProduct(req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await produxtService.deleteProduct(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await produxtService.updateProduct(productId, req.body);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const findProductById = async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await produxtService.findProductById(productId);
        return res.status(201).send(product);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const getAllProducts = async (req, res) => {
    // const productId = await req.params.id;
    try {
        const products = await produxtService.getAllProducts(req.query);
        // console.log(req.query);
        return res.status(200).send(products);
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

const createMultipleProduct = async (req, res) => {
    const productId = await req.params.id;
    try {
        const products = await produxtService.createMultipleProduct(req.body);
        return res.status(201).send({ message: "Product Created Successfully" });
    } catch (error) {
        return res.status(500).send({ error: error.message });
    }
}

module.exports = {
    createProduct, deleteProduct, updateProduct, getAllProducts, createMultipleProduct, findProductById
}

