import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const item = new Schema({
    _id:{
        type: String,
        required: true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});

let Item = mongoose.model ('item', item);

export default Item;