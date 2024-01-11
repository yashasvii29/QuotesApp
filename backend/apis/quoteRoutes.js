const express = require('express');
const router = express.Router()
const Quotes = require('../models/Quote');

router.get('/allquotes', async(req,res)=>{
    try{
        let allQuotes = await Quotes.find({});
        res.status(200).json(allQuotes);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})
// successfull status code => 200
// error status code => 400
router.post('/addquotes',async(req,res)=>{
    let {author,text} = req.body;
    await Quotes.create({author,text});
    res.status(201).json({msg:"new quote created successfully"});
})

module.exports = router;
// 201 is also a successfull code
// documentation for status codes=> status code