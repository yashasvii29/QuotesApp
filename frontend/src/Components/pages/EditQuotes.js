import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import { useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios';

const EditQuotes = () => {
  let params = useParams();
  let navigate = useNavigate();
  let authorInputRef =  useRef();
  let quoteInputRef = useRef();
  
// edit form m already data show krne ke liye data ko fetch krenge.. uss particular quote ka data jise edit krna hai toh uske liye useState hook ka use krenge and usme ek object assign kr denge with two keys author and text
// data fetch krna hai means side effect task perform krna hai toh side effect task perform krne le liye useEffect hook ka use krenge and uske andar ek fun call krenge to fetch the data form that url
  let [input,setInput] = useState({author:'',text:''});

  async function getQuoteData(){
    let res = await axios.get(`http://localhost:8080/quotes/${params.id}`);
    // console.log(res);
    let {author,text} = res.data;
    setInput({author,text});

  }

  // let [isValid , setIsvalid] =useState(true);
  function inputChangeHandlerAuthor(e){
   
    setInput({author:e.target.value});
    // if(input.author.trim().length>0){
    //   setIsvalid(true);
    // }
  }
  function inputChangeHandlerText(e){
    
    setInput({text:e.target.value});
    // if(input.text.trim().length>0){
    //   setIsvalid=true;
    // }
  }

useEffect(()=>{
  getQuoteData();
},[])


const editquoteHandler = async(e)=>{
  
  e.preventDefault();
  // if(input.author.trim().length===0 || input.text.trim().length===0){
  //   setIsvalid(false);
  //   return;
  // }
  const author = authorInputRef.current.value;
  const text = quoteInputRef.current.value;
  // console.log(authorInputRef.current.value);
  //     console.log(quoteInputRef.current.value);
 
  // data ko(means author and quote ko ) post req ke through bhejenge and post req axios ke through jayegi
  // post req backend ke andar jayegi in /addquotes routes
  try{
      let res = await axios.patch(`http://localhost:8080/quotes/${params.id}`,{author,text});
      console.log(res);
      navigate(`/quotes/${params.id}`);
  }
  catch(e){
    console.log('cannot update a new quote at this moment');
  }
  console.log(authorInputRef.current.value);
  console.log(quoteInputRef.current.value);
}
  return (
    <div>
    <h1 className='text-center text-5xl font-bold pt-8'>Edit Quote</h1>
      <form onSubmit={editquoteHandler} action="" className='p-10 bg-red-300 w-96 shadow-cyan-500/50 rounded-2xl m-auto mt-16 border-solid border-8 border-red-950 '>
        <div className='mt-1'>
          <label className='block m-1' htmlFor="author">Author:</label>
          <input onChange={inputChangeHandlerAuthor} type="text" id='author' placeholder="Author's Name" value={input.author} ref={authorInputRef} />
        </div>

        <div className='mt-4'>
          <label className='block m-1' htmlFor="quote">Quote:</label>
          <textarea onChange={inputChangeHandlerText} className='border-box focus:outline-none container' name="" id="quote" cols="15" rows="4" placeholder="Author's Quote" value={input.text} ref={quoteInputRef}></textarea>
        </div>

        <button className='border-solid border-4 text-xl border-sky-500 font-bold py-2 px-4 hover:bg-blue-400 hover:border-black bg-slate-800 mt-3 text-white hover:text-black'>Edit Quote</button>
      </form>
    </div>
  )
}

export default EditQuotes