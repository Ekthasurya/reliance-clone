import React from 'react'
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa'
import { TfiYoutube } from 'react-icons/tfi'
import "../Css/Footer.css"

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='foot-one'>
                    <div className='one-first'>
                        <p className='foot-head'>Product Categories</p>
                        <p>Smartphones</p>
                        <p>Laptops</p>
                        <p>DSLR Cameras</p>
                        <p>Televisions</p>
                        <p>Air Conditioners</p>
                        <p>Refrigerators</p>
                        <p>Kitchen Appliances</p>
                        <p>Accessories</p>
                        <p>Personal Care & Grooming</p>
                        <p>Smartwatches</p>
                    </div>
                    <div className='one-second'>
                        <p className='foot-head'>Follow Us</p>
                        <div className='social-logo'>
                            <div className='facebook-log'><FaFacebookSquare size={20} /></div>
                            <div className='twitter-log'><FaTwitter size={20} /></div>
                            <div className='youtube-log'><TfiYoutube size={20} /> </div>
                        </div>
                    </div>
                </div>
                <div className='foot-two'>
                    <div className='two-first'>
                        <p className='foot-head'>Site Info</p>
                        <p>About Reliance Digital</p>
                        <p>resQ Services</p>
                        <p>Locate nearest resQ service center</p>
                        <p>Locate nearest My Jio Store</p>
                        <p>Site Map</p>
                        <p>Gift Cards</p>
                        <p>Corporate Enquires</p>
                        <p>Contact Us</p>
                    </div>
                    <div className='two-second'>
                        <p className='foot-head'>Experience Reliance Digital App on Mobile</p>
                        <div className='downlod-app'>
                            <img src="https://www.reliancedigital.in/build/client/images/google_play_store.png" alt="" />
                            <img src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='foot-three'>
                    <p className='foot-head'>Resource Centre</p>
                    <p>Product Reviews</p>
                    <p>Buying Guides</p>
                    <p>How Tos</p>
                    <p>Featured Stories</p>
                    <p>Events & Happenings</p>
                    <p>Nearest Store</p>
                </div>
                <div className='foot-four'>
                    <p className='foot-head'>Policies</p>
                    <p>Terms of Use</p>
                    <p>FAQs</p>
                    <p>Cancellation and Return Policy</p>
                    <p>Pricing and Payments Policy</p>
                    <p>Shipping and Delivery Policy</p>
                    <p>Privacy Policy</p>
                    <p>E-waste Recycling Policy</p>
                    <p>EMI and Additional Cashback T&C</p>
                    <p>RelianceOne Loyalty Program T&C</p>
                    <p>Caution Notice</p>
                </div>
            </div>
            <div className='footer-end'>
               <h3>Disclaimer</h3>
               <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
            </div>
            <hr />
            <p className='last-foot'>© 2024 Reliance Digital. All Rights Reserved.</p>
        </>
    )
}

export default Footer