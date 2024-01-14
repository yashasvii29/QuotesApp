import React from 'react'
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const NewQuotes = () => {
  let navigate = useNavigate();
 let authorInputRef =  useRef();
 let quoteInputRef = useRef();

 const addQuoteHandler = async(e)=>{
  
      e.preventDefault();
      const author = authorInputRef.current.value;
      const text = quoteInputRef.current.value;
      // data ko(means author and quote ko ) post req ke through bhejenge and post req axios ke through jayegi
      // post req backend ke andar jayegi in /addquotes routes
      try{
          let res = await axios.post('http://localhost:8080/addquotes',{author,text});
          console.log(res);
          navigate('/');
      }
      catch(e){
        console.log('cannot create a new quote at this moment');
      }
      // console.log(authorInputRef.current.value);
      // console.log(quoteInputRef.current.value);
 }
  return (
    <div>
    <h1 className='text-center text-5xl font-bold pt-8'>Add Quote</h1>
      <form onSubmit={addQuoteHandler} action="" className='p-10 bg-red-300 w-96 shadow-cyan-500/50 rounded-2xl m-auto mt-16 border-solid border-8 border-red-950 '>
        <div className='mt-1'>
          <label className='block m-1' htmlFor="author">Author:</label>
          <input type="text" id='author' placeholder="Author's Name" ref={authorInputRef} />
        </div>

        <div className='mt-4'>
          <label className='block m-1' htmlFor="quote">Quote:</label>
          <textarea className='border-box focus:outline-none container' name="" id="quote" cols="15" rows="4" placeholder="Author's Quote" ref={quoteInputRef}></textarea>
        </div>

        <button className='border-solid border-4 text-xl border-sky-500 font-bold py-2 px-4 hover:bg-blue-400 hover:border-black bg-slate-800 mt-3 text-white hover:text-black'> Add Quote</button>
      </form>
    </div>
  )
}
// dom ko manipualte krne ke liye useRef() hook ka use krenge and useRef() hook ke liye input tag m ref attribute ka sue krenge

export default NewQuotes


// new Quotes ke liye form banayenge