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
    <h1 className='text-5xl font-bold text-center pb-4 pt-4'>All Quotes</h1>
      <ul>{
        quotes.map((quote,index)=>{
            return <Quote key={quote._id} author={quote.author} text={quote.text} id={quote._id}/>
            {/* key m index bhi assign kr sakte hai and ._id bhi because dono hi unique hai */}
          })
      }
      </ul>
    </div>
    
  )
}

export default AllQuotes

// axios ki help se api ko hit krenge(means url pr req send krenge) and api hit krne se jo data milega use le lenge