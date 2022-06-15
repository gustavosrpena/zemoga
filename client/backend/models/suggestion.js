const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const suggestionSchema = new Schema({
    name:{
      type: String,
      required: true
    }
  }, {timestamps: true})

const Suggestion = mongoose.model('Suggestion', suggestionSchema);
module.exports = Suggestion;