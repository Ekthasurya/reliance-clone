import React from 'react'
import HomeFirstSlider from '../Component/HomeComponent/HomeFirstSlider'
import SmartphonesSlider from '../Component/HomeComponent/SmartphonesSlider'
import SmartwatchesSingle from './SmartwatchesSingle'
import SmartwatchesSlider from '../Component/HomeComponent/SmartwatchesSlider'

const HomePage = () => {
  return (
    <div className='home-div'>
      <HomeFirstSlider/>
      <p>Best Selling audio| 3Hr Instant Delivery| 3 Months Jio Saavn Free*</p>
      <div>
      <SmartphonesSlider/>
      </div>
      <p>Avail No-cost EMI on Premium Smartwatches</p>
      <div><SmartwatchesSlider/></div>
    </div>
  )
}

export default HomePage