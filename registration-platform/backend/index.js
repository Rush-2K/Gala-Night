var cors = require("cors");
const mongoose = require("mongoose");
var express = require("express");
// var MongoClient = require("mongodb").MongoClient;
var CONNECTION_STRING = "mongodb+srv://admin:wezP1L6ogxMBRV4e@cluster0.ubvvsig.mongodb.net/Gala-Night?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 5038;
const User = require('./models/userDetails.model.js')

const app = express();

//act as a middleware bcs by default we cannotpass json through node 
app.use(express.json());

app.use(cors());

//add new data
app.post('/api/user', async (req, res) => {
  try{
      console.log("add data body: ", req.body)
      const user = await User.create(req.body);
      res.status(200).json(user);
  }catch(error){
      res.status(500).json({message: error.message})
  }
})

//update data
app.put('/api/user/:id', async (req, res) => {
  try{
      const {id} = req.params;

      const user = await User.findByIdAndUpdate(id, req.body);

      if(!user) {
        return res.status(404).json({message: "User not found"});
      }
      //reccheck again the updated one
      const updatedUser = await User.findById(id);

      res.status(200).json(updatedUser);
  }catch(error){
      res.status(500).json({message: error.message})
  }
})

//delete a data
app.delete('/api/user/:id', async (req, res) => {
  try{
      const {id} = req.params;

      const user = await User.findByIdAndDelete(id);

      if(!user) {
        return res.status(404).json({message: "User not found"});
      }
      //reccheck again the updated one
      const updatedUser = await User.findById(id);

      res.status(200).json({message: "Product deleted successfully"});
  }catch(error){
      res.status(500).json({message: error.message})
  }
})

//get all result
app.get('/api/users', async (req, res) => {
  try{
    const user = await User.find({});
    res.status(200).json(user)
}catch(error){
    res.status(500).json({message: error.message})
}
})

//get specific id
app.get('/api/user/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
}catch(error){
    res.status(500).json({message: error.message})
}
})

//CONNECT TO DATABASE USING MONGOOSE
mongoose.connect(CONNECTION_STRING).then(() => {
  console.log("Connected to database!");
  app.listen(PORT, () => {
    console.log('Server is running on port ', PORT)
  })
}).catch(() => {
  console.log("Connection failed!");
})



