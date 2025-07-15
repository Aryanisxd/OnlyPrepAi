import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const questionSchema = new Schema({
    session : {type :mongoose.Schema.Types.ObjectId, ref : "Session",},
    question: String,
    answer : String,
    note : String,
    isPinned : {type : Boolean, default : false},
    
} ,{
    timestamps: true
});

const QuestionModel = mongoose.model('Question', questionSchema);

export default QuestionModel;