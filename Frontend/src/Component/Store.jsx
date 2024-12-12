import React from 'react'
import { FaHome } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import "../Css/Store.css"
import { RiUserLocationFill } from 'react-icons/ri'

const Store = () => {
  return (
    <>
    <div className='Link-top'>
      <div><FaHome /></div>
      <div><IoIosArrowForward /></div>
      <div><p>Find a store</p></div>
    </div>

    <div className='store-head'>
       <div className='first-store'>
        <p className='first-para'>Reliance Digital Store & Service Center </p>
        <p className='second-para'>near you</p>
        <div className='store-logo-one'><RiUserLocationFill size={22} /></div>
       </div>
       <div className='second-store'>
          <div><input type="text" /></div>
          <p>or Use</p>
          <div></div>
       </div>
    </div>
    </>
  )
}

export default Store