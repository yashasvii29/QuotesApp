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
    try{
        let {author,text} = req.body;
    await Quotes.create({author,text});
    res.status(201).json({msg:"new quote created successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
    
})

// 3rd route=> to show a paricular quote
router.get('/quotes/:id',async(req,res)=>{
    try{
        let {id} =req.params;
        const quote = await Quotes.findById(id);
        res.status(200).json(quote);
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})

// 4th route=> show the form to edit the quote(particular quote)


router.patch('/quotes/:id',async(req,res)=>{
    try{
        let {id}=req.params;
        await Quotes.findByIdAndUpdate(id,{author,text})
        res.status(201).json({msg:"quote updated successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})  


router.delete('/quotes/:id',async(req,res)=>{
    try{
        let {id} =req.params;
        await Quotes.findByIdAndDelete(id);
        res.status(201).json({msg:"quote deleted successfully"});
    }
    catch(e){
        res.status(400).json({msg:'something went wrong'});
    }
})
module.exports = router;
// 201 is also a successfull code
// documentation for status codes=> status code
 

