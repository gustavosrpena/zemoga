const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const cardSchema = new Schema({
    name:{
      type: String,
      required: true
    },
    description:{
      type: String,
      required: true
    },
    category:{
      type: String,
      required: true
    },
    picture:{
      type: String,
      required: true
    },
    lastUpdated:{
      type: String,
      required: true
    },
    votes:{
      type: Object,
      required: true,
      positive:{
        type: Number,
        required: true
      },
      negative:{
        type: Number,
        required: true
      },
    },
  }, {timestamps: true})

const Card = mongoose.model('Card', cardSchema);
module.exports = Card;