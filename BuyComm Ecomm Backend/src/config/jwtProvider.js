
const jwt = require("jsonwebtoken");

const SECRET_KEY =  "ksjbjbvdkvbkblvbdfkvldkjbvandfjkniulghewiouiyhrtvnfnbsliudhgeughvbiveudsjkvbniu"

const generateToken=(userId)=>{
    const token = jwt.sign({userId},SECRET_KEY,{expiresIn:"7d"})
    return token;
}

const getUserIdFromToken = (token) => {
    try {
      const decodedToken = jwt.verify(token, SECRET_KEY);
      return decodedToken.userId;
    } catch (err) {
      throw new Error(err);
    }
  };

module.exports={generateToken,getUserIdFromToken};