const mongoose = require("mongoose");

const mondbUrl = "mongodb+srv://aniketkapse100:RrpuysXoz1J1x4f0@cluster0.ik4x8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDb = () => {
    return mongoose.connect(mondbUrl);
};

module.exports = { connectDb };
