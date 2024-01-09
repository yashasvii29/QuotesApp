import React from 'react'
import {Link} from 'react-router-dom'
// import styles from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <nav className='flex justify-around bg-green-700 min-h-16 items-center text-2xl'>
        <h2 className='font-bold text-4xl text-white'>Quotes App</h2>
        <ul className='flex gap-10 text-white text-xl '>
            <li><Link  to='/'>All Quotes</Link></li>
            <li><Link  to='/new'>New Quotes</Link></li>
        </ul>
    </nav>
  )
}

export default MainNavigation
// react m class attribute ke place pr className attribute ka use krte hai bcz react is based on jsx js+html and in js class is a reserved keyword so we can't use class attribute inside a component means in react
// mainnavigation.js file ke andar navbar banayenge and navbar contains navigation links(jinhe list ke andar likhenge) jin pr click krne se hum iss page pr naviagte ho jate hai means redirect ho jate hai


// install tailwindcss inside frontend folder
// npm install -D tailwindcss
// npx tailwindcss init
// copy content in tailwind.config.js file
// copy 3 lines in index.css

// database ko rakhne ke liye mongoose chahiye that'swhy mongoose ko install krenge

// react app ko run krne ke liye use the command npm start

// react m anchor tag ke place pr link ka use krte hai 