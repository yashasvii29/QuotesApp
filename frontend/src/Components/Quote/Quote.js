import React from 'react'

const Quote = (props) => {
  return (
    <div>
        <li className='mt-4 max-w-4xl m-auto p-4 bg-teal-300  flex   border-solid border-2 border-black'>
            <span className=''>
                <p className='font-mono font-bold text-lg uppercase'>{props.text}</p>
                <h3 className=' text-lg '>{props.author}</h3>
            </span>
            <button className='border-solid border-4 text-lg border-sky-500 px-1 text-white bg-orange-800 ml-4'>View full Quote</button>
        </li>
    </div>
  )
}

export default Quote