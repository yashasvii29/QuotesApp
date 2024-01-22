// jab bhi hum database ke sath kaam krenge so we will require mongoose
// and jab bhi server ke sath kaam krenge so we will require express


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const seedDB = require('./seed');
var cors = require('cors');
const quoteRoutes = require('./apis/quoteRoutes');
mongoose.connect('mongodb://127.0.0.1:27017/Quote')
.then(()=>{
    console.log('DB Connected');
})
.catch((err)=>{
    console.log(err);
})
app.use(cors({origin:['http://localhost:3000']}));

app.use(express.urlencoded({extended:true})); // form data
app.use(express.json());  // json data


// origin m uss server ka path dete hai ki konse server se req le rhe hai
// connect() returns a promise so we will use .then and .catch and these both methods accepts a callback function(is the fun which passes as a argument inside he fun)
app.use(quoteRoutes);
app.get('/hello',(req,res)=>{
    res.status(200).json({msg:"hello from quotesapp"});
})
// jab /hello pr req send krenge toh res m data send kr rhe hai in json format
// 200 is a successful status

// seedDB();
const port = process.env.PORT || 8080
app.listen(port , ()=>{
    console.log(`server connected at port ${port}`);
})