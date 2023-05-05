import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'

import './App.css'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Account from './components/Account'
import LoginButton from './components/LoginButton'

const App = () => {
  return (
      <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        {/* <LoginButton /> */}
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        <Footer />
      </Box>
  )
}

export default App