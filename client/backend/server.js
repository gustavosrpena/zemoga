// server/index.js

const express = require("express");
const mongoose = require("mongoose");
const cards = require('./data')

const PORT = process.env.PORT || 3001;

//express app
const app = express();

//connect to mongodb
const dbURI = "mongodb+srv://caio:caiozitos@cluster0.9lvwt.mongodb.net/zemoga?retryWrites=true&w=majority"

const connectMongo = async () => {
try{

  const con = await mongoose.connect(dbURI,{
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    // ${connect.connection.host}
    console.log(`Mongo connected: ${con.connection.host}`)
  }catch (error){
    console.error(`Error : ${error.message}`);
    process.exit();
  }

}
connectMongo();
app.use(express.static(__dirname));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api", (req,res) => {
  res.json(cards)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});