import { useState } from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import EventListing from './pages/EventListing';
import EventDetail from './pages/EventDetails';
//import './App.css'

function App() {
  

  return (
    <>
    <Header />
     <EventListing />
     <EventDetail />
    </>
  )
}

export default App
