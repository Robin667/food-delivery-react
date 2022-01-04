import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Restaurants from '../pages/Restaurants'
import Restaurant from '../pages/Restaurant'

function Navigator () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='restaurant/:id' element={<Restaurant />} />
    </Routes>
  )
}

export default Navigator
