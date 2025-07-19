import UserModel from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//Generate JWT Token 
const generateToken  = (userId) =>{
    return jwt.sign({id:userId} , process.env.JWT_SECRET , {expiresIn : "7d"});

}

//@desc Register a new user 
// @route POST /api/auth/register 
//@access Public 
const registerUser = async (req,res) =>{
    try{
        const {name ,email,password,profileImageUrl} = req.body;

        //check if user already exists 
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.status(400).json({message : "User already exists"});
        }
        //hash password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //create user 
        const user = await UserModel.create({
            name,
            email,
            password:hashedPassword,
            profileImageUrl : user.profileImageUrl,
            token : generateToken(user._id),
        
        });

    }catch(error){
        res.status(500).json({message:"Server error" , error : error.message})

    }
    
};


//@desc Login user 
// @route POST /api/auth/login
//@access Public

const loginUser = async (req,res) =>{
    

}

//@desc Login user 
// @route POST /api/auth/login
//@access Private {requires jwt}
const getUserProfile = async (req,res) =>{
}

export default {registerUser , loginUser , getUserProfile };

    
