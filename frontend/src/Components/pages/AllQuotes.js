import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Quote from '../Quote/Quote'


const AllQuotes = () => {
 

  let [quotes , setQuotes]=useState([]);

   async function getQuotes(){
     let res = await axios.get('http://localhost:8080/allquotes');  // apis folder ke andar quoteRoute m jo route banaya tha vahi route likhai hai
     console.log(res);
     setQuotes(res.data);
  }

  useEffect(()=>{
    getQuotes();
  }, [])
  return (
    <div>
    <h1>All Quotes</h1>
      <ul>{
        quotes.map((quote,index)=>{
            return <Quote key={index} author={quote.author} text={quote.text} />
          })
      }
      </ul>
    </div>
    
  )
}

export default AllQuotes

// axios ki help se api ko hit krenge(means url pr req send krenge) and api hit krne se jo data milega use le lenge