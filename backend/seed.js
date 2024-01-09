// dummy data is a part of database

const mongoose = require('mongoose');
const Quotes = require('./models/Quote');

let dummyQuotes = [
    {
        author: 'Maya Angelou',
        text: 'I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.'
    },
    {
        author: 'Elbert Hubbard',
        text: 'A friend is someone who knows all about you and still loves you.'
    },
    {
        author: 'Mae West',
        text: 'You only live once, but if you do it right, once is enough.'
    },
    {
        author: 'Mark Twain',
        text: 'All you need in this life is ignorance and confidence; then success is sure. '
    },
    {
        author: 'Steve Maraboli',
        text: 'Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.'
    }
]

 async function seedDB(){
    await Quotes.insertMany(dummyQuotes);
    console.log('Data Seeded');
}

module.exports = seedDB;