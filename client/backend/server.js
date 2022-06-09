// server/index.js

const express = require("express");
const mongoose = require("mongoose");
const Cards = require('./models/card');
const cors = require("cors");
// const router = express.Router();

const PORT = process.env.PORT || 5000;

//express app
const app = express();
app.use(cors())
//connect to mongodb
const dbURI = "mongodb+srv://caio:caiozitos@cluster0.9lvwt.mongodb.net/zemoga?retryWrites=true&w=majority"

const connectMongo = async () => {
try{

  const con = await mongoose.connect(dbURI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo connected: ${con.connection.host}`)
  }catch (error){
    console.error(`Error : ${error.message}`);
    process.exit();
  }

}
connectMongo();

// router.route('/').get((req,res) =>{
//   Cards.find((error,data) =>{
//     if(error){
//       return next(error)
//     }else{
//       console.log(data)
//       res.json(data)
//     }
//   })
// })
app.get("/", function(req, res) {

  Cards.find()
    .then((result) => {
      console.log(result)
      res.json(result);
    })
    .catch((err) => {
      console.log(err)
    });

});
// app.use(express.static(__dirname));


// app.get("/api", (req,res) => {
//   res.json(cards)
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});