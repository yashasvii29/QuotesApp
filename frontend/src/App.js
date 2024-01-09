import React, { Fragment } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'


const App = () => {
  return (
    <Fragment>
      <MainNavigation/>
        <main>
          <Routes>
            <Route path='/' element={<AllQuotes/>}/>
            <Route path='/new' element={<NewQuotes/>}/>

          </Routes>
        </main>
    </Fragment>
  )
}

export default App

// App.js file ke andar routes banayenge


// pehle frontend folder ke andar navigate honge cd frontend
// frontend folder ko hi react app banana hai toh  command ke baad . ka use krenge 
// npx create-react-app . command ka use krenge to create frontend folder as a react app
