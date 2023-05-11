import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Nav from './components/Nav'
import Addtocart from './components/Addtocart'
import Search from './components/Search'
import Detail from './components/Detail'
import { motion } from 'framer-motion'

const App = () => {
  return (
    <motion.div layout className=' container mx-auto p-2 md:p-5'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/addtocart' element={<Addtocart/>} />
        <Route path='/search' element={<Search/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </motion.div>
  )
}

export default App