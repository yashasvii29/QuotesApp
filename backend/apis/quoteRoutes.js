const express = require('express');
const router = express.Router()
const Quotes = require('../models/Quote');
// 1st route=> to show all the quotes
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
// 2nd route=> to add a new quote 
router.post('/addquotes',async(req,res)=>{
    let {author,text} = req.body;
    await Quotes.create({author,text});
    res.status(201).json({msg:"new quote created successfully"});
})

// 3rd route=> to show a paricular quote
router.get('/quotes/:id',async(req,res)=>{
    let {id} =req.params;
    const quote = await Quotes.findById(id);
    res.status(200).json(quote);
})

module.exports = router;
// 201 is also a successfull code
// documentation for status codes=> status code