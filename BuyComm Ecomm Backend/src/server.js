const {connectDb} = require("./config/db")
const app = require(".");

const PORT = 5454;

app.listen(PORT, async()=>{
    await connectDb();
    console.log("ecommerce api listioning on PORT : ", PORT);
})




