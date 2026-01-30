import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoSchema = new Schema({
    videoFile : {
        type : String,
        required : true
    },
    thumbnail : {
        type : String ,
        required : true,
        unique : true
    },
    owner : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },
    tittle : {
        type : String,
        required : true,
    },
    descreption : {
        type : String,
        required : true
    },
    duration : {
        type : Number , // cloudnary
        required : true
    },
    views : {
        type : Number,
        default : 0
    },
    isPublished : {
        type : Boolean ,
        default : true
    },
   
},{timestamps : true})

videoSchema.plugin(mongooseAggregatePaginate )

export const Video = mongoose.model("Video" , videoSchema)