import React from 'react'

import { Container } from '@mui/material'
import Product from './Components/Product'
import BluuCard from './Components/BluuCard'
import Navbar from './Components/Navbar/Navbar'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const navArrayLinks = [
  {title:"Home", path:"/", icon: <InboxIcon />},
  {title:"Login", path:"/login", icon:<DraftsIcon />},
  {title:"Register", path:"/register", icon: <InboxIcon /> }
]


function App() {
  
  return (
    <>
      <Navbar navArrayLinks={navArrayLinks}/>
      <Product></Product>
      <BluuCard />

    <Container sx={{
      mt: 8
    }}> 
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Routes>
    </Container>
    </>
  )
}

export default App
