/* eslint-disable no-undef */
const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(8000, ()=>{
  console.log("Server Running at http://localhost:8000");
})

app.get("/api/tryserver", (req, res) => {
  res.json({
    message:"Hello World!"
  })
}) 
const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");

app.get("/api/showperson", (req, res) => {
  res.json({
    personFirstName: faker.person.firstName(),
    personLastName: faker.person.lastName(),
    personPhoneNumber: faker.phone.imei()
  })
}) 

mongoose.connect("mongodb://localhost:27017/test")


const userRoutes = require("./userRoutes")
app.use('/api', userRoutes);