// server/index.js

const express = require("express");
const mongoose = require("mongoose");
const Cards = require('./models/card');
const cors = require("cors");
const { ObjectId } = require("mongodb");
global.bodyParser = require('body-parser');
// const router = express.Router();

const PORT = process.env.PORT || 5000;

//express app
const app = express();
app.use(cors())
//connect to mongodb
const dbURI = "mongodb+srv://caio:caiozitos@cluster0.9lvwt.mongodb.net/zemoga?retryWrites=true&w=majority"

let db 
const connectMongo = async () => {
try{

  db = await mongoose.connect(dbURI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Mongo connected: ${db.connection.host}`)
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
      // console.log(result)
      res.json(result);
    })
    .catch((err) => {
      console.log(err)
    });

});

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
  parameterLimit: 100000
}))
app.use(bodyParser.json({
  limit: '50mb',
  parameterLimit: 100000
}))

app.post('/send/:id', (req, res) => {
  // console.log(db,"a",db.cards,"b",Cards,"c");
  console.log(req)
  console.log(req.body.votes)

  let db_connect = db
  let myquery = {_id: ObjectId(req.params.id)};
  let newvalues = {
    $set:{
      votes: req.body.votes
    },
  }
  // db
  //   .collection("cards")
  Cards
    .updateOne(myquery, newvalues, function (err, result) {
      if (err) throw err;
      console.log("1 document updated");
      res.json(result);
    });
  // db.cards.updateOne(req.body, (err, data) => {
  //     if(err) return console.log(err);
  //     res.send(('saved to db: ' + data));
  // })
  // db.collection('cards').findOne(req.body, (err, data) => {
  //   if(err) return console.log(err);
  //   res.send(('saved to db: ' + data));
  // })
});
// app.use(express.static(__dirname));


// app.get("/api", (req,res) => {
//   res.json(cards)
// })

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});