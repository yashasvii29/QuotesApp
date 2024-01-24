import React from 'react'
import { useNavigate } from 'react-router-dom'
const Quote = (props) => {
  const navigate =  useNavigate(); 
  const showQuoteHandler = (id)=>{
    navigate(`/quotes/${id}`);
  }
  return (
    <div>
        <li className='mt-4 max-w-4xl m-auto p-4 bg-teal-300  flex   border-solid border-2 border-black'>
            <span>
                <p className='font-mono font-bold text-lg uppercase'>{props.text}</p>
                <h3 className=' text-lg'>{props.author}</h3>
            </span>
            <button onClick={()=>{showQuoteHandler(props.id)}} className='border-solid border-4 text-lg border-sky-500 px-1 text-white bg-orange-800 ml-4'>
            View full Quote</button>
        </li>
    </div>
  )
}

export default Quote