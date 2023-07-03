import { useState } from 'react'
import './App.css'
import SignIn from './components/SignIn'
import Register from './components/Register'
import NsfwIdentifier from './components/NsfwIdentifier'
import ErrorPage from './components/error_page/ErrorPage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
        <Routes>
        <Route exact path='/' Component={SignIn} />
        <Route exact path='/register' Component={Register} />
        <Route exact path='/nsfwIdentifier' Component={NsfwIdentifier} />
        <Route exact path='/*' Component={ErrorPage} />
      </Routes>
    </>
  )
}

export default App
