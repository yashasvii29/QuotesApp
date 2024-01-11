import React from 'react'

const NewQuotes = () => {
  return (
    <div>
    <h1 className='text-center text-5xl font-bold pt-8'>Add Quote</h1>
      <form action="" className='p-10 bg-red-300 w-96 shadow-cyan-500/50 rounded-2xl m-auto mt-16 border-solid border-8 border-red-950 '>
        <div className='mt-1'>
          <label className='block m-1' htmlFor="author">Author:</label>
          <input type="text" id='author' placeholder="Author's Name" />
        </div>

        <div className='mt-4'>
          <label className='block m-1' htmlFor="quote">Quote:</label>
          <textarea className='border-box focus:outline-none container' name="" id="quote" cols="15" rows="4" placeholder="Author's Quote"></textarea>
        </div>

        <button className='border-solid border-4 text-xl border-sky-500 font-bold py-2 px-4 hover:bg-blue-400 hover:border-black bg-slate-800 mt-3 text-white hover:text-black'> Add Quote</button>
      </form>
    </div>
  )
}

export default NewQuotes


// new Quotes ke liye form banayenge