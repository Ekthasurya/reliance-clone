import React from 'react'
import "../Css/Navbar.css";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Navbar = ({ cartItemCount }) => {
    return (
        <>
            <div className='first-nav'>
              <a href="#/store"><p>Find a store</p></a> 
                <p>l</p>
                <p>Buying guides</p>
                <p>l</p>
                <p>Contact us</p>
            </div>
            <div className='second-nav'>
                <div className='logo'>
                    <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="logo" />
                </div>
                <div className='search-bar'>
                    <form class="search-bar" action="/search" method="GET">
                        <div class="input-container">
                            <input type="text" name="query" placeholder="Find your favorite products" class="search-input" required />
                            <button type="submit" class="search-button"><FaSearch /></button>
                        </div>
                    </form>
                </div>
                <div className='second-last-nav'>
                    <p>Select your Pin Code</p>
                    <p>l</p>
                    <a href="#/cart"><div className='cart-nav'><div className='cart-logo'><FaShoppingCart/></div> <p>Cart</p></div></a>
                    <p>l</p>
                    <a href="#/login"><div className='login-nav'><div className='login-logo'><IoPersonOutline /></div> <p>Login</p></div></a>
                </div>
            </div>
    <nav class="navbar">
    <ul class="menu">
      <li class="menu-item">
        <a className='hober' href="#"><div className='nav-point'><p>MOBILES & TABLETS</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div></a>
        <div class="hover-box">
          <div className='cover-box'>
            <div className='first-line'>
          <div className='first-one'>
          <a href="#/smartphones"> <p className='drop-head'>Smartphone</p></a>
            <p>Redmi @Lowest Price*</p>
            <p>OnePlus CE3 Lite @Lowest Price*</p>
          </div>
          <div className='first-two'>
          <a href="#/smartwatches"> <p className='drop-head'>Smartwathes</p></a>
            <p>Apple</p>
            <p>Samsung</p>
            <p>Fireboltt</p>
            <p>Noise</p>
            <p>Boat</p>
          </div>
          <div className='first-three'>
          <a href="#/tabletAccessories"><p className='drop-head'>Accessories</p></a>
          <a href="#/tabletAccessories"><p>Tablet Accessories</p></a>
          <a href="#/mobileAccessories"><p>Mobile Accessories</p></a>
            <p>Mobile Grips & Stands</p>
            <p>Car Mobile Holders</p>
            <p>Memory Cards</p>
            <p>Cables & Cords</p>
            <p>Chargers & Adapters</p>
          </div>
          </div>

          <div className='second-line'>
              <div className='second-one'>
                <p className='drop-head'>Headphones & Headsets</p>
              </div>
              <div className='second-two'>
                 <p className='drop-head'>Tablets & eReaders</p>
                 <p>Every Day use Tablets below 15000</p>
                 <p>Premium Tablets, Above 15001</p>
              </div>
              <div className='second-three'>
                <p className='drop-head'>Power Banks</p>
              </div>
              <div className='second-four'>
                <p className='drop-head'>eSlates</p>
              </div>
          </div>

          <div className='Third-line'>
            <p className='drop-head'>AI Learning Robots</p>
          </div>
          </div>
        </div>
      </li>


      <li class="menu-item">
        <a className='hober' href="#"> <div className='nav-point'><p>TELEVISIONS</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className='first-line'>
            <p className='drop-head'>Televisions</p>
            <p>Smart TVs</p>
            <p>32 Inch TVs</p>
            <p>43 Inch TVs</p>
            <p>55 Inch TVs</p>
            <p>Android TVs</p>
          </div>
          <div className='second-line'>
            <div className='second-one'>
            <p className='drop-head'>Gaming</p>
            <p>Gaming Consoles</p>
            <p>Gaming Accessories</p>
            <p>Gaming Titles</p>
            <p>Gaming Controllers</p>
            </div>
            <div className='second-two'>
            <p className='drop-head'>Projectors</p>
            </div>
            <div className='second-three'>
            <p className='drop-head'>Streaming Devices</p>
            </div>
          </div>
          <div className='third-line'>
            <div className="third-one">
            <p className='drop-head'>Reconnect Disney | Marvel Audio Collection</p>
            </div>
            <div className="third-two">
            <p className='drop-head'>TV & Audio Accessories</p>
            <p>Virtual Reality Headsets</p>
            <p>Stabilizers & Surge Protectors</p>
            </div>
            
          </div>
          </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#"> <div className='nav-point'><p>AUDIO</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
        <div className="first-line">
            <p className='drop-head'>Headphones & Headsets</p>
            <p>True Wireless</p>
            <p>Bluetooth Neckbands</p>
            <p>Earphones</p>
            <p>Bluetooth Headphones</p>
            <p>Gaming Headset</p>
            <p>Wired Headphones</p>
        </div>
        <div className="second-line">
            <p className='drop-head'>Speakers & Soundbars</p>
            <p>Bluetooth Speakers</p>
            <p>Smart Speakers</p>
            <p>Home Theatre Systems</p>
            <p>Specialty Speakers</p>
            <p>Soundbars</p>
            <p>Party Speakers</p>
            <p>Multimedia Speakers</p>
        </div>
        <div className="third-line">
            <p className='drop-head'>Musical Instruments</p>
            <p>Guitars and Ukuleles</p>
            <p>Microphones</p>
            <p>Musical Keyboards</p>
        </div>
        </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#">   <div className='nav-point'><p>HOME APPLIANCES</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className="first-line">
            <div className="first-one">
              <p className='drop-head'>Air Conditioners</p>
              <p>Split Air Conditioners</p>
              <p>Window Air Conditioners</p>
              <p>Smart Air Conditioners</p>
              <p>Energy Efficient Air Conditioners</p>
              <p>1 ton Air Conditioners</p>
              <p>1.5 ton Air Conditioners</p>
              <p>5 star Air Conditioners</p>
            </div>
            <div className="first-two">
              <p className='drop-head'>Air Coolers</p>
            </div>
            <div className="first-three">
              <p className='drop-head'>Air Purifiers</p>
            </div>
          </div>
          <div className="second-line">
            <div className="second-one">
              <p className='drop-head'>Washing Machines</p>
              <p>Fully Automatic Front Load</p>
              <p>Fully Automatic Top Load</p>
              <p>Semi-Automatic Top Load</p>
            </div>
            <div className="second-two">
              <p className='drop-head'>Refrigerators</p>
              <p>Single Door</p>
              <p>Double Door</p>
              <p>Side by Side Refrigerators</p>
              <p>Convertible</p>
            </div>
          </div>
          <div className="third-line">
            <div className="third-one">
              <p className='drop-head'>Vacuum Cleaners</p>
              <p>Robotic Vacuum Cleaners</p>
            </div>
            <div className="third-two"><p className='drop-head'>Radiators</p></div>
            <div className="third-three"><p className='drop-head'>Dishwashers</p></div>
            <div className="third-four"><p className='drop-head'>Fans</p></div>
            <div className="third-five"><p className='drop-head'>Cloth Dryers</p></div>
            <div className="third-six"><p className='drop-head'>Geysers</p></div>
            <div className="third-seven"><p className='drop-head'>Room Heaters</p></div>
          </div>
          </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#"> <div className='nav-point'><p>COMPUTERS</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className="first-line">
            <div className="first-one">
              <p className='drop-head'>Laptops</p>
              <p>Basic use laptops</p>
              <p>Student Laptops</p>
              <p>Thin and light Laptops</p>
              <p>Multi-Tasking Laptops</p>
              <p>Gaming Laptops</p>
              <p>Content creator Laptops</p>
            </div>
            <div className="first-two"><p className='drop-head'>Computer Monitors</p></div>
            <div className="first-three"><p className='drop-head'>Desktops & All-In-Ones</p></div>
          </div>
          <div className="second-line">
            <div className="second-one"><p className='drop-head'>Bluetooth & WiFi Speakers</p></div>
            <div className="second-two">
              <p className='drop-head'>Internet Connectivity Devices</p>
              <p>Routers</p>
              <p>WiFi Range Extenders</p>
              <p>Wireless USB Adapters</p>
            </div>
            <div className="second-three">
              <p className='drop-head'>Printers & Inks</p>
              <p>Printers</p>
              <p>Toners & Ink Cartridges</p>
            </div>
            <div className="second-four">
              <p className='drop-head'>Data Storage Devices</p>
              <p>Memory Cards</p>
              <p>Pen Drives & OTG Drives</p>
              <p>Hard Disks & SSD</p>
            </div>
          </div>
          <div className="third-line">
            <div className="third-one">
              <p className='drop-head'>Computer Accessories</p>
              <p>Upto 72% Off, Only on Reliancedigital.in</p>
              <p>Computer Networking Cables</p>
              <p>Laptop Chargers & Adaptor</p>
              <p>Laptop Batteries</p>
              <p>Hubs & Docks</p>
              <p>Laptop Bags & Sleeves</p>
              <p>Laptop Cooling Pad</p>
              <p>Laptop Screen Protectors</p>
              <p>Laptop Tables & Stands</p>
              <p>Mouse Pads</p>
            </div>
            <div className="third-two">
              <p className='drop-head'>Input Devices</p>
              <p>Keyboards</p>
              <p>Computer Mouse</p>
              <p>Stylus Pens</p>
            </div>
          </div>
        </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#"> <div className='nav-point'><p>CAMERAS</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className="first-line">
            <div className="first-one"><p className='drop-head'>DSLR Cameras</p></div>
            <div className="first-two"><p className='drop-head'>Mirrorless Cameras</p></div>
            <div className="first-three"><p className='drop-head'>Point & Shoot Cameras</p></div>
            <div className="first-four"><p className='drop-head'>ProSumer Cameras</p></div>
            <div className="first-five"><p className='drop-head'>Action Cameras</p></div>
            <div className="first-six">
              <p className='drop-head'>Photo Storage Devices</p>
              <p>Memory Cards</p>
              <p>Pen Drives</p>
            </div>
          </div>
          <div className="second-line">
            <div className="second-one">
              <p className='drop-head'>Binoculars</p>
            </div>
            <div className="second-two"><p className='drop-head'>Camera Lens</p></div>
            <div className="second-three">
              <p className='drop-head'>Digital Camera Accessories</p>
              <p>Camera Batteries & Chargers</p>
              <p>Camera bags & cases</p>
              <p>Tripods & Monopods</p>
              <p>Action Camera Accessories</p>
            </div>
          </div>
          </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#"><div className='nav-point'><p>KITCHEN APPLIANCES</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
           <div className="first-line">
            <div className="first-one">
              <p className='drop-head'>Mixers</p>
              <p>2 Jar</p>
              <p>3 Jar</p>
              <p>4 Jar</p>
            </div>
            <div className="first-two"><p className='drop-head'>Water Purifiers</p></div>
            <div className="first-three"><p className='drop-head'>Electric Kettle</p></div>
            <div className="first-four">
              <p className='drop-head'>Microwaves Oven</p>
              <p>Convection</p>
              <p>Solo & Grill</p>
            </div>
            <div className="first-five"><p className='drop-head'>OTG</p></div>
            <div className="first-six"><p className='drop-head'>Air Fryer</p></div>
            <div className="first-seven"><p className='drop-head'>Food Processor</p></div>
           </div>
           <div className="second-line">
            <div className="second-one">
              <p className='drop-head'>Cooktops</p>
              <p>1 Burner</p>
              <p>2 Burner</p>
              <p>3 Burner</p>
              <p>4 Burner</p>
            </div>
            <div className="second-two"><p className='drop-head'>Induction Cooktops</p></div>
            <div className="second-three"><p className='drop-head'>Rice Cooker</p></div>
            <div className="second-four"><p className='drop-head'>Hobs</p></div>
            <div className="second-five"><p className='drop-head'>Hoods/Chimneys</p></div>
            <div className="second-six"><p className='drop-head'>Cookware</p></div>
           </div>
           <div className="third-line">
            <div className="third-one">
              <p className='drop-head'>Juicer</p>
              <p>1 Jar</p>
              <p>2 Jar</p>
              <p>3 Jar</p>
              <p>4+ Jar</p>
            </div>
            <div className="third-two"><p className='drop-head'>Hand Blender</p></div>
            <div className="third-three"><p className='drop-head'>Hand Mixer</p></div>
            <div className="third-four"><p className='drop-head'>Wet Grinder</p></div>
            <div className="third-five"><p className='drop-head'>Coffee/Tea Makers</p></div>
            <div className="third-six"><p className='drop-head'>Pop up Toasters</p></div>
            <div className="third-seven"><p className='drop-head'>Sandwich Makers</p></div>
            <div className="third-eight"><p className='drop-head'>Choppers</p></div>
           </div>
           <div className="fourth-line">
            <div className="fourth-one"><p className='drop-head'>Specialty Appliances </p></div>
            <div className="fourth-two"><p className='drop-head'>Electric Kettles</p></div>
            <div className="fourth-three"><p className='drop-head'>Water Dispensers</p></div>
            <div className="fourth-four"><p className='drop-head'>Flour Mills</p></div>
           </div>
           </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#">  <div className='nav-point'><p>PERSONAL CARE</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className="first-line">
            <div className="first-one"><p className='drop-head'>Shavers & Trimmers</p></div>
            <div className="first-two"><p className='drop-head'>Epilators</p></div>
            <div className="first-three"><p className='drop-head'>Hair Dryers & Stylers</p></div>
            <div className="first-four"><p className='drop-head'>Weighing Scales</p></div>
            <div className="first-five"><p className='drop-head'>Irons</p></div>
          </div>
          <div className="second-line">
            <div className="second-one">
              <p className='drop-head'>Hygiene & Personal Care</p>
              <p>Digital Thermometers</p>
              <p>Massagers</p>
              <p>Misc. Care Devices</p>
            </div>
            <div className="second-two">
              <p className='drop-head'>Garment Steamers</p>
            </div>
          </div>
          </div>
        </div>
      </li>

      <li class="menu-item">
        <a className='hober' href="#"> <div className='nav-point'><p>ACCESSORIES</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div>
        </a>
        <div class="hover-box">
        <div className='cover-box'>
          <div className="first-line">
            <div className="first-one"><p className='drop-head'>Bags, Cases & Sleeves</p></div>
            <div className="first-two">
              <p className='drop-head'>Smart Devices</p>
              <p>Smart Plugs</p>
              <p>Smart Cameras</p>
              <p>Smart Sensors</p>
              <p>Smart Lights</p>
              <p>Smart Speakers</p>
            </div>
            <div className="first-three"><p className='drop-head'>Batteries</p></div>
            <div className="first-four"><p className='drop-head'>Power Banks</p></div>
            <div className="first-five"><p className='drop-head'>Cables & Cords</p></div>
            <div className="first-six"><p className='drop-head'>Chargers & Adapters</p></div>
            <div className="first-seven"><p className='drop-head'>Bluetooth & WiFi Speakers</p></div>
          </div>
          <div className="second-line">
            <div className="second-one"><p className='drop-head'>Reconnect Disney | Marvel Accessories</p></div>
            <div className="second-two">
              <p className='drop-head'>Data Storage Devices</p>
              <p>Memory Cards</p>
              <p>Pen Drives & OTG Drives</p>
              <p>Hard Disks & SSD</p>
            </div>
            <div className="second-three">
              <p className='drop-head'>Mounts & Stands</p>
              <p>Air Conditioner Stands</p>
              <p>Car Mobile Holders</p>
              <p>Mobile Grips & Stands</p>
            </div>
            <div className="second-four"><p className='drop-head'>Surge Protectors</p></div>
            <div className="second-five"><p className='drop-head'>Webcams</p></div>
          </div>
          <div className="third-line">
            <div className='third-one'><p className='drop-head'>Headphones & Headsets</p></div>
          <div className="third-two"><p className='drop-head'>Cleaners & Protectors</p></div>
            <div className="third-three"><p className='drop-head'>Computer Mouse</p></div>
            <div className="third-four"><p className='drop-head'>Keyboards</p></div>
            <div className="third-five"><p className='drop-head'>Indoor Lighting</p></div>
            <div className="third-six"><p className='drop-head'>Office Electronics</p>
            <p>Laminators</p>
            </div>
            <div className="third-seven"><p className='drop-head'>Tyre Inflators </p></div>
            <div className="third-eight"><p className='drop-head'>Routers</p></div>
            <div className="third-nine"><p className='drop-head'>Screen Guards & Protectors</p></div>
            <div className="third-ten"><p className='drop-head'>Power Strips & Extension Cords</p></div>
            <div className="third-ele"><p className='drop-head'>Stabilizers</p></div>
          </div>
          </div>
        </div>
      </li>
     
    </ul>

  </nav>
        </>
    )
}

export default Navbar