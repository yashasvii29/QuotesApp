import React, { Fragment } from 'react'
import MainNavigation from './Components/mainNavigation/MainNavigation'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Components/pages/AllQuotes'
import NewQuotes from './Components/pages/NewQuotes'
import ShowQuotes from './Components/pages/ShowQuotes'
import EditQuotes from './Components/pages/EditQuotes'


const App = () => {
  return (
    <Fragment>
      <MainNavigation/>
        <main>
          <Routes>
            <Route path='/' element={<AllQuotes/>}/>
            <Route path='/new' element={<NewQuotes/>}/>
            <Route path='/quotes/:id' element={<ShowQuotes/>}/>
            <Route path='/quotes/:id/edit' element={<EditQuotes/>}/>
            

          </Routes>
        </main>
    </Fragment>
  )
}

export default App

// App.js file ke andar routes banayenge...sare routes app.js banayenge


// pehle frontend folder ke andar navigate honge cd frontend
// frontend folder ko hi react app banana hai toh  command ke baad . ka use krenge 
// npx create-react-app . command ka use krenge to create frontend folder as a react app


// jab bhi mern m project ya applicationn banate hai toh  2 server chalte hai
// frontend 3000 pr and backend 8080 pr
// toh jab bhi mern m koi bhi app ya project banayenge toh terminal pr 2 server ko run krenge for frontend and for backend