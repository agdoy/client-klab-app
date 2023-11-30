import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navigation from './Navigation/Navigation'
import HomeDiscoPage from './../pages/homepage/HomeDiscoPage.jsx'
import AppRoutes from '../routes/AppRoutes.jsx'


function App() {


  return (
    <>

      <Navigation />
      <AppRoutes />

    </>
  )
}

export default App
