import mongoose from 'mongoose';


async function connectDB(){
    try {
        await mongoose.connect(process.env.MONGO_URL,{});
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default connectDB;