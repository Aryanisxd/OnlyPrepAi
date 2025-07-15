import mongoose, { Schema }  from 'mongoose' 

const sessionSchema = new Schema({
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
    roles  : {type : String, required :True},
    experience : {type : String, required : true},
    topicsToFocus : {type:String , required : True },
    description : String,
    questions : [{type : mongoose.Schema.Types.ObjectId, ref : "Question"}],
    user : {type : mongoose.Schema.Types.ObjectId, ref : "User"},
})

const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;