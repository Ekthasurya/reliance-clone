import { useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Page/HomePage'
import Navbar from './Component/Navbar'
import Footer from './Component/Footer'
import Store from './Component/Store'
import Smartphones from './Page/Smartphones'
import SmartphonesSingle from './Page/SmartphonesSingle'
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
import PaymentPage from './Page/PaymentPage'
import Cables from './Page/Cables'
import CablesSingle from './Page/CablesSingle'
import Chargers from './Page/Chargers'
import ChargersSingle from './Page/ChargersSingle'
import Headphones from './Page/Headphones'
import HeadphonesSingle from './Page/HeadphonesSingle'
import Tablets from './Page/Tablets'
import TabletsSingle from './Page/TabletsSingle'
import Power from './Page/Power'
import PowerSingle from './Page/PowerSingle'
import ESlates from './Page/ESlates'
import ESlatesSingle from './Page/ESlatesSingle'
import Robots from './Page/Robots'
import RobotsSingle from './Page/RobotsSingle'
import Televisions from './Page/Televisions'
import TelevisionsSingle from './Page/TelevisionsSingle'
import Gaming from './Page/Gaming'
import GamingSingle from './Page/GamingSingle'
import Projectors from './Page/Projectors'
import ProjectorsSingle from './Page/ProjectorsSingle'
import Streaming from './Page/Streaming'
import StreamingSingle from './Page/StreamingSingle'
import TV from './Page/TV'
import TVSingle from './Page/TVSingle'
import Speakers from './Page/Speakers'
import SpeakersSingle from './Page/SpeakersSingle'
import Musical from './Page/Musical'
import MusicalSingle from './Page/MusicalSingle'
import AirConditioners from './Page/AirConditioners'
import AirConditionersSingle from './Page/AirConditionersSingle'
import AirCoolers from './Page/AirCoolers'
import AirCoolersSingle from './Page/AirCoolersSingle'
import AirPurifiers from './Page/AirPurifiers'
import AirPurifiersSingle from './Page/AirPurifiersSingle'
import WashingMachines from './Page/WashingMachines'
import WashingMachinesSingle from './Page/WashingMachinesSingle'
import Refrigerators from './Page/Refrigerators'
import RefrigeratorsSingle from './Page/RefrigeratorsSingle'
import VacuumCleaners from './Page/VacuumCleaners'
import VacuumCleanersSingle from './Page/VacuumCleanersSingle'
import Radiators from './Page/Radiators'
import RadiatorsSingle from './Page/RadiatorsSingle'
import Fans from './Page/Fans'
import FansSingle from './Page/FansSingle'
import Geysers from './Page/Geysers'
import GeysersSingle from './Page/GeysersSingle'
import Laptops from './Page/Laptops'
import LaptopsSingle from './Page/LaptopsSingle'
import DSLRCameras from './Page/DSLRCameras'
import DSLRCamerasSingle from './Page/DSLRCamerasSingle'
import MirrorlessCameras from './Page/MirrorlessCameras'
import MirrorlessCamerasSingle from './Page/MirrorlessCamerasSingle'
import ProsumerCameras from './Page/ProsumerCameras'
import ProsumerCamerasSingle from './Page/ProsumerCamerasSingle'
import ActionCameras from './Page/ActionCameras'
import ActionCamerasSingle from './Page/ActionCamerasSingle'
import PhotoStorageDevices from './Page/PhotoStorageDevices'
import PhotoStorageDevicesSingle from './Page/PhotoStorageDevicesSingle'
import KitchenAppliances from './Page/KitchenAppliances'
import KitchenAppliancesSingle from './Page/KitchenAppliancesSingle'
import PERSONALCARE from './Page/PERSONALCARE'
import PERSONALCARESingle from './Page/PERSONALCARESingle'
import Accessories from './Page/Accessories'
import AccessoriesSingle from './Page/AccessoriesSingle'
import ContactUs from './Component/ContactUs'

function App() {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Add product to cart
  };

  return (
    <>
      <Navbar cartItemCount={cart.length} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/store' element={<Store />} />
        <Route path='/smartphones' element={<Smartphones />} />
        <Route path='/smartphones/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />
        <Route path="/payment" element={<PaymentPage totalPrice={cart.reduce((total, item) => total + item.price, 0)} />} />
        <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path='/smartwatches' element={<Smartwatches />} />
        <Route path='/smartwatches/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path='/smartwatches' element={<Smartwatches />} />
        <Route path='/smartwatches/:id' element={<SmartphonesSingle addToCart={addToCart} />} />
        <Route path='/cables' element={<Cables />} />
        <Route path='/cables/:id' element={<CablesSingle addToCart={addToCart} />} />
        <Route path='/chargers' element={<Chargers />} />
        <Route path='/chargers/:id' element={<ChargersSingle addToCart={addToCart} />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/headphones/:id' element={<HeadphonesSingle addToCart={addToCart} />} />
        <Route path='/tablets' element={<Tablets />} />
        <Route path='/tablets/:id' element={<TabletsSingle addToCart={addToCart} />} />
        <Route path='/power' element={<Power />} />
        <Route path='/power/:id' element={<PowerSingle addToCart={addToCart} />} />
        <Route path='/eslates' element={<ESlates />} />
        <Route path='/eslates/:id' element={<ESlatesSingle addToCart={addToCart} />} />
        <Route path='/robot' element={<Robots />} />
        <Route path='/robot/:id' element={<RobotsSingle addToCart={addToCart} />} />
        <Route path='/televisions' element={<Televisions />} />
        <Route path='/televisions/:id' element={<TelevisionsSingle addToCart={addToCart} />} />
        <Route path='/gaming' element={<Gaming />} />
        <Route path='/gaming/:id' element={<GamingSingle addToCart={addToCart} />} />
        <Route path='/projectors' element={<Projectors />} />
        <Route path='/projectors/:id' element={<ProjectorsSingle addToCart={addToCart} />} />
        <Route path='/streaming' element={<Streaming />} />
        <Route path='/streaming/:id' element={<StreamingSingle addToCart={addToCart} />} />
        <Route path='/tv' element={<TV />} />
        <Route path='/tv/:id' element={<TVSingle addToCart={addToCart} />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/speakers/:id' element={<SpeakersSingle addToCart={addToCart} />} />
        <Route path='/musical' element={<Musical />} />
        <Route path='/musical/:id' element={<MusicalSingle addToCart={addToCart} />} />
        <Route path='/AirConditioners' element={<AirConditioners />} />
        <Route path='/AirConditioners/:id' element={<AirConditionersSingle addToCart={addToCart} />} />
        <Route path='/AirCoolers' element={<AirCoolers />} />
        <Route path='/AirCoolers/:id' element={<AirCoolersSingle addToCart={addToCart} />} />
        <Route path='/AirPurifiers' element={<AirPurifiers />} />
        <Route path='/AirPurifiers/:id' element={<AirPurifiersSingle addToCart={addToCart} />} />
        <Route path='/WashingMachines' element={<WashingMachines />} />
        <Route path='/WashingMachines/:id' element={<WashingMachinesSingle addToCart={addToCart} />} />
        <Route path='/Refrigerators' element={<Refrigerators />} />
        <Route path='/Refrigerators/:id' element={<RefrigeratorsSingle addToCart={addToCart} />} />
        <Route path='/VacuumCleaners' element={<VacuumCleaners />} />
        <Route path='/VacuumCleaners/:id' element={<VacuumCleanersSingle addToCart={addToCart} />} />
        <Route path='/Radiators' element={<Radiators />} />
        <Route path='/Radiators/:id' element={<RadiatorsSingle addToCart={addToCart} />} />
        <Route path='/Fans' element={<Fans />} />
        <Route path='/Fans/:id' element={<FansSingle addToCart={addToCart} />} />
        <Route path='/Geysers' element={<Geysers />} />
        <Route path='/Geysers/:id' element={<GeysersSingle addToCart={addToCart} />} />
        <Route path='/Laptops' element={<Laptops />} />
        <Route path='/Laptops/:id' element={<LaptopsSingle addToCart={addToCart} />} />
        <Route path='/DSLRCameras' element={<DSLRCameras />} />
        <Route path='/DSLRCameras/:id' element={<DSLRCamerasSingle addToCart={addToCart} />} />
        <Route path='/MirrorlessCameras' element={<MirrorlessCameras />} />
        <Route path='/MirrorlessCameras/:id' element={<MirrorlessCamerasSingle addToCart={addToCart} />} />
        <Route path='/ProsumerCameras' element={<ProsumerCameras />} />
        <Route path='/ProsumerCameras/:id' element={<ProsumerCamerasSingle addToCart={addToCart} />} />
        <Route path='/ActionCameras' element={<ActionCameras />} />
        <Route path='/ActionCameras/:id' element={<ActionCamerasSingle addToCart={addToCart} />} />
        <Route path='/PhotoStorageDevices' element={<PhotoStorageDevices />} />
        <Route path='/PhotoStorageDevices/:id' element={<PhotoStorageDevicesSingle addToCart={addToCart} />} />
        <Route path='/KitchenAppliances' element={<KitchenAppliances />} />
        <Route path='/KitchenAppliances/:id' element={<KitchenAppliancesSingle addToCart={addToCart} />} />
        <Route path='/PERSONALCARE' element={<PERSONALCARE />} />
        <Route path='/PERSONALCARE/:id' element={<PERSONALCARESingle addToCart={addToCart} />} />
        <Route path='/Accessories' element={<Accessories />} />
        <Route path='/Accessories/:id' element={<AccessoriesSingle addToCart={addToCart} />} />
        <Route path='/tabletAccessories' element={<TabletAccessories />} />
        <Route path='/tabletAccessories/:id' element={<TabletAccessoriesSingle addToCart={addToCart} />} />
        <Route path='/mobileAccessories' element={<MobileAccessories />} />
        <Route path='/mobileAccessories/:id' element={<MobileAccessoriesSingle addToCart={addToCart} />} />
        <Route path='/memoryCards' element={<MemoryCards />} />
        <Route path='/memoryCards/:id' element={<MemoryCardsSingle addToCart={addToCart} />} />
        <Route path='/contact' element={<ContactUs />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
