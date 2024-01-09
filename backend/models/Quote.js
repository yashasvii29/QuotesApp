const mongoose = require('mongoose');
let QuoteSchema = new mongoose.Schema({
    author:{
        type:String,
        required:true,
        trim:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    }
})

let Quotes = mongoose.model('Quotes',QuoteSchema);
// database ke andar Quotes name se model create kr rhe hai toh iss model ke corresponding databse m quotes name se collection create ho jayega

module.exports = Quotes;