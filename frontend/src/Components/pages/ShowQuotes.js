import React, { useEffect, useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import axios from 'axios';
const ShowQuotes = (props) => {
   const params =  useParams();
   const navigate =  useNavigate();
    // parameter ki value ko access krne ke liye we will use useParams() package
   let [quote,setQuote] =  useState({author:'',text:''});


   async function fetchQuote(){
    console.log(params.id);
   let res = await axios.get(`http://localhost:8080/quotes/${params.id}`);
   let {author,text} = res.data;
   console.log(res);
    console.log(author);
    console.log(text);
    setQuote({author,text});
    console.log(quote);
   }
   const editQuoteHandler=()=>{
    navigate(`/quotes/${params.id}/edit`);
   }
    async function deleteQuoteHandler(){
      try{

        let res = await axios.delete(`http://localhost:8080/quotes/${params.id}`);
        console.log(res);
        navigate('/');
      }
      catch(e){
      console.log('cannot delete a quote');
      } 
   }
   useEffect(()=>{
        fetchQuote();
   },[])
   
  return (
    <div>
    <li className='mt-4 max-w-4xl m-auto p-4 bg-teal-300  flex   border-solid border-2 border-black'>
    <span>
        <p className='font-mono font-bold text-lg uppercase'>{quote.text}</p>
        <h2 className='text-lg'>{quote.author}</h2>
    </span>
    </li>
    <button onClick={()=>{editQuoteHandler()}} className=' mt-5 border-solid border-4 text-lg border-sky-500 px-1 text-white bg-orange-800 ml-80'>Edit</button>
    <button onClick={()=>deleteQuoteHandler()} className=' mt-5 border-solid border-4 text-lg border-sky-500 px-1 text-white bg-red-500 ml-4'>Delete</button>
    </div>
  )
}

export default ShowQuotes
// 
// useEffect, useState , useRef , useParams and useNavigate inse complete application bana sakte hai..complex app bhi bana sakte hai