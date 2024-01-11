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

// frontend alag server pr chal rha hai => 3000  and backend alag server pr chal rha hai => 8080
// ek server se dusre server pr req send nhi kr sakte...y cors policy ke kharab hai(which is known as cross origin resource sharing)
// browser ek server se dusre server pr resource share krna allow nhi krta toh iske liye  backend folder m jakar CORS package ko  install krna hai...npm i cors and then require in the app.js file
// cors ko use krne ke liye iska origin dena padta hai means path dena padta hai ....ki hum konse server ke through req le rhe hai  and konse server pr req kr rhe hai
// cors ko backend ke andar install kr rhe hai toh 8080 server pr req send krnege and  3000 server ke through lenge 