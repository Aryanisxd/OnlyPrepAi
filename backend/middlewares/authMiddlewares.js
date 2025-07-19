import jwt from 'jsonwebtoken';
import UserModel from '../models/User.js';


//middleware to protect routes 
const protect = async (req,res,next) =>{
try{
    let token = req.headers.authorization;

    if(token && token.startWith("Bearer")){
        token = token.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await UserModel.findById(decoded.id).select("-password");
        next();
    }else{
        res.status(401).json({message : "Unauthorized"});
    }

}catch(error){
    res.status(401).json({message : "token failed" , error : error.message});
}
}

export default protect;