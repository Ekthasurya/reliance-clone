import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Store from './Component/Store'
import Smartphones from './Page/Smartphones'
import SmartphonesSingle from './Page/smartphonesSingle'
import CartPage from './Page/CartPage'
import LoginPage from './Page/LoginPage'
import RegisterPage from './Page/RegisterPage'
import Smartwatches from './Page/Smartwatches'
import TabletAccessories from './Page/TabletAccessories'
import TabletAccessoriesSingle from './Page/TabletAccessoriesSingle'
import MobileAccessories from './Page/MobileAccessories'
import MobileAccessoriesSingle from './Page/MobileAccessoriesSingle'
import MemoryCards from './Page/MemoryCards'
import MemoryCardsSingle from './Page/MemoryCardsSingle'

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <>
      <Navbar cartItemCount={cart.length} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<Store />} />
        <Route path='/smartphones' element={<Smartphones />} />
        <Route path='/smartphones/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/smartwatches' element={<Smartwatches />} />
        <Route path='/smartwatches/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path='/smartwatches' element={<Smartwatches />} />
        <Route path='/smartwatches/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path='/tabletAccessories' element={<TabletAccessories />} />
        <Route path='/tabletAccessories/:id' element={<TabletAccessoriesSingle addToCart={addToCart} />} />
        <Route path='/mobileAccessories' element={<MobileAccessories />} />
        <Route path='/mobileAccessories/:id' element={<MobileAccessoriesSingle addToCart={addToCart} />} />
        <Route path='/memoryCards' element={<MemoryCards />} />
        <Route path='/memoryCards/:id' element={<MemoryCardsSingle addToCart={addToCart} />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
