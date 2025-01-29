import React, { useState } from 'react'
import "../Css/Navbar.css";
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { IoPersonOutline } from 'react-icons/io5';
import { GoChevronDown } from 'react-icons/go';
import { Link } from 'react-router-dom';
import { IoMdMenu } from 'react-icons/io';

const Navbar = ({ cartItemCount,isAuthenticated, setIsAuthenticated }) => {
  const handleLogout = () => {
    setIsAuthenticated(false); // Set to false when logging out
  };

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeNav, setActiveNav] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleAccordion = (index) => {
    setActiveNav(activeNav === index ? null : index);
  };

    return (
        <>
            <div className='first-nav'>
              <a href="#/store"><p>Find a store</p></a> 
                <p>l</p>
                <p>Buying guides</p>
                <p>l</p>
                <a href="#/contact"><p>Contact us</p></a>
            </div>
            <div className='second-nav'>
              
            <div className="navbar-container">
      {/* Menu Icon */}
      <div className="menu-icon" onClick={toggleDrawer}>
      <div className='menu-icon'><IoMdMenu size={25} /></div>
      </div>

      {/* Drawer */}
      {isDrawerOpen && (
        <div className="drawer">
          <div className="drawer-header">
            <span>           <Link to="/login">
          <div className="login-nav">
            <div className="login-logo"><IoPersonOutline /></div>
            <p>{isAuthenticated ? "Logout" : "Login"}</p>
          </div>
        </Link></span>
            <button className="close-btn" onClick={toggleDrawer}>
              ✖
            </button>
          </div>
          <div className="nav-list">
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(1)}
              >
                <h3>MOBILES & TABLETS</h3>
              </div>
              {activeNav === 1 && (
                <div className="accordion-body">
                  <div className="sub-nav"><a href="#/smartphones"><h5>Smartphone</h5></a></div>
                  <div className="sub-nav"><a href="#/smartphones"><p>Redmi @Lowest Price*</p></a></div>
                  <div className="sub-nav"><a href="#/smartphones"><p>OnePlus CE3 Lite @Lowest Price*</p></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><h5>Smartwathes</h5></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><p>Apple</p></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><p>Samsung</p></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><p>Fireboltt</p></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><p>Noise</p></a></div>
                  <div className="sub-nav"><a href="#/smartwatches"><p>Boat</p></a></div>
                  <div className="sub-nav"><a href="#/tabletAccessories"><h5>Accessories</h5></a></div>
                  <div className="sub-nav"><a href="#/tabletAccessories"><p>Tablet Accessories</p></a></div>
                  <div className="sub-nav"><a href="#/mobileAccessories"><p>Mobile Accessories</p></a></div>
                  <div className="sub-nav"><a href="#/mobileAccessories"><p>Mobile Grips & Stands</p></a></div>
                  <div className="sub-nav"><a href="#/mobileAccessories"><p>Car Mobile Holders</p></a></div>
                  <div className="sub-nav"><a href="#/memoryCards"><p>Memory Cards</p></a></div>
                  <div className="sub-nav"><a href="#/cables"><p>Cables & Cords</p></a></div>
                  <div className="sub-nav"><a href="#/chargers"><p>Chargers & Adapters</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><h5>Headphones & Headsets</h5></a></div>
                  <div className="sub-nav"><a href="#/tablets"><h5>Tablets & eReaders</h5></a></div>
                  <div className="sub-nav"><a href="#/tablets"><p>Every Day use Tablets below 15000</p></a></div>
                  <div className="sub-nav"><a href="#/tablets"><p>Premium Tablets, Above 15001</p></a></div>
                  <div className="sub-nav"><a href="#/power"><h5>Power Banks</h5></a></div>
                  <div className="sub-nav"><a href="#/eslates"><h5>eSlates</h5></a></div>
                  <div className="sub-nav"><a href="#/robot"><h5>AI Learning Robots</h5></a></div>
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(2)}
              >
                <h3>TELEVISIONS</h3>
              </div>
              {activeNav === 2 && (
                <div className="accordion-body">
                  <div className="sub-nav"> <a href="#/televisions"><h5>Televisions</h5></a></div>
                  <div className="sub-nav"> <a href="#/televisions"><p>Smart TVs</p></a></div>
                  <div className="sub-nav"> <a href="#/televisions"><p>32 Inch TVs</p></a></div>
                  <div className="sub-nav"> <a href="#/televisions"><p>43 Inch TVs</p></a></div>
                  <div className="sub-nav"> <a href="#/televisions"><p>55 Inch TVs</p></a></div>
                  <div className="sub-nav"> <a href="#/televisions"><p>Android TVs</p></a></div>
                  <div className="sub-nav"><a href="#/gaming"><h5>Gaming</h5></a></div>
                  <div className="sub-nav"><a href="#/gaming"><p>Gaming Consoles</p></a></div>
                  <div className="sub-nav"><a href="#/gaming"><p>Gaming Accessories</p></a></div>
                  <div className="sub-nav"><a href="#/gaming"><p>Gaming Titles</p></a></div>
                  <div className="sub-nav"><a href="#/gaming"><p>Gaming Controllers</p></a></div>
                  <div className="sub-nav"><a href="#/projectors"><h5>Projectors</h5></a></div>
                  <div className="sub-nav"><a href="#/streaming"><h5>Streaming Devices</h5></a></div>
                  <div className="sub-nav"><a href="#/tv"><h5>Reconnect Disney | Marvel Audio Collection</h5></a></div>
                  <div className="sub-nav"><a href="#/tv"><h5>TV & Audio Accessories</h5></a></div>
                  <div className="sub-nav"><a href="#/tv"><p>Virtual Reality Headsets</p></a></div>
                  <div className="sub-nav"><a href="#/tv"><p>Stabilizers & Surge Protectors</p></a></div>
                  
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(3)}
              >
                <h3>AUDIO</h3>
              </div>
              {activeNav === 3 && (
                <div className="accordion-body">
                  <div className="sub-nav"><a href="#/headphones"><h5>Headphones & Headsets</h5></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>True Wireless</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>Bluetooth Neckbands</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>Earphones</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>Bluetooth Headphones</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>Gaming Headset</p></a></div>
                  <div className="sub-nav"><a href="#/headphones"><p>Wired Headphones</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><h5>Speakers & Soundbars</h5></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Bluetooth Speakers</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Smart Speakers</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Home Theatre Systems</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Specialty Speakers</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Soundbars</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Party Speakers</p></a></div>
                  <div className="sub-nav"><a href="#/speakers"><p>Multimedia Speakers</p></a></div>
                  <div className="sub-nav"><a href="#/musical"><h5>Musical Instruments</h5></a></div>
                  <div className="sub-nav"><a href="#/musical"><p>Guitars and Ukuleles</p></a></div>
                  <div className="sub-nav"><a href="#/musical"><p>Microphones</p></a></div>
                  <div className="sub-nav"><a href="#/musical"><p>Musical Keyboards</p></a></div>
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(4)}
              >
                <h3>HOME APPLIANCES</h3>
              </div>
              {activeNav === 4 && (
                <div className="accordion-body">
                   <div className="sub-nav"><a href="#/AirConditioners"><h5>Air Conditioners</h5></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>Split Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>Window Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>Smart Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>Energy Efficient Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>1 ton Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>1.5 ton Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirConditioners"><p>5 star Air Conditioners</p></a></div>
                  <div className="sub-nav"><a href="#/AirCoolers"><h5>Air Coolers</h5></a></div>
                  <div className="sub-nav"><a href="#/AirPurifiers"><h5>Air Purifiers</h5></a></div>
                  <div className="sub-nav"><a href="#/WashingMachines"><h5>Washing Machines</h5></a></div>
                  <div className="sub-nav"><a href="#/WashingMachines"><p>Fully Automatic Front Load</p></a></div>
                  <div className="sub-nav"><a href="#/WashingMachines"><p>Fully Automatic Top Load</p></a></div>
                  <div className="sub-nav"><a href="#/WashingMachines"><p>Semi-Automatic Top Load</p></a></div>
                  <div className="sub-nav"><a href="#/Refrigerators"><h5>Refrigerators</h5></a></div>
                  <div className="sub-nav"><a href="#/Refrigerators"><p>Single Door</p></a></div>
                  <div className="sub-nav"><a href="#/Refrigerators"><p>Double Door</p></a></div>
                  <div className="sub-nav"><a href="#/Refrigerators"><p>Side by Side Refrigerators</p></a></div>
                  <div className="sub-nav"><a href="#/Refrigerators"><p>Convertible</p></a></div>
                  <div className="sub-nav"><a href="#/VacuumCleaners"><h5>Vacuum Cleaners</h5></a></div>
                  <div className="sub-nav"><a href="#/VacuumCleaners"><p>Robotic Vacuum Cleaners</p></a></div>
                  <div className="sub-nav"><a href="#/Radiators"><h5>Radiators</h5></a></div>
                  <div className="sub-nav"><a href="#/Radiators"><h5>Dishwashers</h5></a></div>
                  <div className="sub-nav"><a href="#/Fans"><h5>Fans</h5></a></div>
                  <div className="sub-nav"><a href="#/Fans"><h5>Cloth Dryers</h5></a></div>
                  <div className="sub-nav"><a href="#/Geysers"><h5>Geysers</h5></a></div>
                  <div className="sub-nav"><a href="#/Geysers"><h5>Room Heaters</h5></a></div>

                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(5)}
              >
                <h3>COMPUTERS</h3>
              </div>
              {activeNav === 5 && (
                <div className="accordion-body">
                  <div className="sub-nav"><a href="#/Laptops"><h5>Laptops</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Basic use laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Student Laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Thin and light Laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Multi-Tasking Laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Gaming Laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Content creator Laptops</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Computer Monitors</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Desktops & All-In-Ones</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Bluetooth & WiFi Speakers</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Internet Connectivity Devices</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Routers</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>WiFi Range Extenders</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Wireless USB Adapters</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Printers & Inks</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Printers</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Toners & Ink Cartridges</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Data Storage Devices</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Memory Cards</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Pen Drives & OTG Drives</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Hard Disks & SSD</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Computer Accessories</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Upto 72% Off, Only on Reliancedigital.in</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Computer Networking Cables</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Chargers & Adaptor</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Batteries</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Hubs & Docks</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Bags & Sleeves</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Cooling Pad</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Screen Protectors</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Laptop Tables & Stands</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Mouse Pads</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><h5>Input Devices</h5></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Keyboards</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Computer Mouse</p></a></div>
                  <div className="sub-nav"><a href="#/Laptops"><p>Stylus Pens</p></a></div>
                  
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(6)}
              >
                <h3>CAMERAS</h3>
              </div>
              {activeNav === 6 && (
                <div className="accordion-body">
                   <div className="sub-nav"><a href="#/DSLRCameras"><h5>DSLR Cameras</h5></a></div>
                   <div className="sub-nav"><a href="#/MirrorlessCameras"><h5>Mirrorless Cameras</h5></a></div>
                   <div className="sub-nav"><a href="#/MirrorlessCameras"><h5>Point & Shoot Cameras</h5></a></div>
                   <div className="sub-nav"><a href="#/ProsumerCameras"><h5>ProSumer Cameras</h5></a></div>
                   <div className="sub-nav"><a href="#/ActionCameras"><h5>Action Cameras</h5></a></div>
                   <div className="sub-nav"><a href="#/PhotoStorageDevices"><h5>Photo Storage Devices</h5></a></div>
                   <div className="sub-nav"><a href="#/PhotoStorageDevices"><p>Memory Cards</p></a></div>
                   <div className="sub-nav"><a href="#/PhotoStorageDevices"><p>Pen Drives</p></a></div>
                   <div className="sub-nav"><a href="#/PhotoStorageDevices"><h5>Binoculars</h5></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><h5>Camera Lens</h5></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><h5>Digital Camera Accessories</h5></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><p>Camera Batteries & Chargers</p></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><p>Camera bags & cases</p></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><p>Tripods & Monopods</p></a></div>
                   <div className="sub-nav"><a href="#/DSLRCameras"><p>Action Camera Accessories</p></a></div>
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(7)}
              >
               <h3>KITCHEN APPLIANCES</h3>
              </div>
              {activeNav === 7 && (
                <div className="accordion-body">
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Mixers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>2 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>3 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>4 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Water Purifiers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Electric Kettle</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Microwaves Oven</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>Convection</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>Solo & Grill</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>OTG</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Air Fryer</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Food Processor</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Cooktops</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>1 Burner</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>2 Burner</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>3 Burner</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>4 Burner</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Induction Cooktops</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Rice Cooker</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Hobs</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Hoods/Chimneys</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Cookware</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Juicer</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>1 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>2 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>3 Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><p>4+ Jar</p></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Hand Blender</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Hand Mixer</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Wet Grinder</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Coffee/Tea Makers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Pop up Toasters</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Sandwich Makers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Choppers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Specialty Appliances </h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Electric Kettles</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Water Dispensers</h5></a></div>
                   <div className="sub-nav"><a href="#/KitchenAppliances"><h5>Flour Mills</h5></a></div>
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(8)}
              >
                <h3>PERSONAL CARE</h3>
              </div>
              {activeNav === 8 && (
                <div className="accordion-body">
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Shavers & Trimmers</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Epilators</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Hair Dryers & Stylers</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Weighing Scales</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Irons</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Hygiene & Personal Care</h5></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><p>Digital Thermometers</p></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><p>Massagers</p></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><p>Misc. Care Devices</p></a></div>
                   <div className="sub-nav"><a href="#/PERSONALCARE"><h5>Garment Steamers</h5></a></div>
                </div>
              )}
            </div>
            <div className="accordion">
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(2)}
              >
               <h3>ACCESSORIES</h3>
              </div>
              {activeNav === 2 && (
                <div className="accordion-body">
                   <div className="sub-nav"><a href="#/Accessories"><h5>Bags, Cases & Sleeves</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Smart Devices</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Smart Plugs</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Smart Cameras</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Smart Sensors</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Smart Lights</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Smart Speakers</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Batteries</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Power Banks</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Cables & Cords</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Chargers & Adapters</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Bluetooth & WiFi Speakers</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Reconnect Disney | Marvel Accessories</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Data Storage Devices</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Memory Cards</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Pen Drives & OTG Drives</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Hard Disks & SSD</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Mounts & Stands</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Air Conditioner Stands</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Car Mobile Holders</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Mobile Grips & Stands</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Surge Protectors</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Webcams</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Headphones & Headsets</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Cleaners & Protectors</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Computer Mouse</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Keyboards</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Indoor Lighting</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Office Electronics</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><p>Laminators</p></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Tyre Inflators</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Routers</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Screen Guards & Protectors</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Power Strips & Extension Cords</h5></a></div>
                   <div className="sub-nav"><a href="#/Accessories"><h5>Stabilizers</h5></a></div>
                  
                </div>
              )}
            </div>
        
          </div>
        </div>
      )}
    </div>   
             <div className='res-serch-logo'>
            <a href="#/"> <div className='logo'>
                    <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="logo" />
                </div></a>
                <div className='search-bar'>
                    <form class="search-bar" action="/search" method="GET">
                        <div class="input-container">
                            <input type="text" name="query" placeholder="Find your favorite products" class="search-input" required />
                            <button type="submit" class="search-button"><FaSearch /></button>
                        </div>
                    </form>
                </div>
                </div>
                <div className='second-last-nav'>
                    <p>Select your Pin Code</p>
                    <p>l</p>
                    <a href="#/cart"><div className='cart-nav'><div className='cart-logo'><FaShoppingCart/></div> <p>Cart</p></div></a>
                    <p>l</p>
                    <Link to="/login">
          <div className="login-nav">
            <div className="login-logo"><IoPersonOutline /></div>
            <p>{isAuthenticated ? "Logout" : "Login"}</p>
          </div>
        </Link>
        
                </div>
            </div>
    <nav class="navbar">
    <ul class="menu">
      <li class="menu-item">
        <a className='hober' ><div className='nav-point'><p>MOBILES & TABLETS</p><div className='nav-point-logo'><GoChevronDown size={18} /></div></div></a>
        <div class="hover-box">
          <div className='cover-box'>
            <div className='first-line'>
          <div className='first-one'>
          <a href="#/smartphones"> <p className='drop-head'>Smartphone</p></a>
          <a href="#/smartphones"><p>Redmi @Lowest Price*</p> </a>
          <a href="#/smartphones"> <p>OnePlus CE3 Lite @Lowest Price*</p></a>
          </div>
          <div className='first-two'>
          <a href="#/smartwatches"> <p className='drop-head'>Smartwathes</p></a>
            <a href=""><p>Apple</p></a>
            <a href=""><p>Samsung</p></a>
            <a href=""><p>Fireboltt</p></a>
            <a href=""><p>Noise</p></a>
            <a href=""><p>Boat</p></a>
          </div>
          <div className='first-three'>
          <a href="#/tabletAccessories"><p className='drop-head'>Accessories</p></a>
          <a href="#/tabletAccessories"><p>Tablet Accessories</p></a>
          <a href="#/mobileAccessories"><p>Mobile Accessories</p></a>
          <a href=""><p>Mobile Grips & Stands</p></a>
          <a href=""><p>Car Mobile Holders</p></a>
            <a href="#/memoryCards"><p>Memory Cards</p></a>
            <a href="#/cables"> <p>Cables & Cords</p></a>
            <a href="#/chargers"><p>Chargers & Adapters</p></a>
          </div>
          </div>

          <div className='second-line'>
              <div className='second-one'>
                <a href="#/headphones"><p className='drop-head'>Headphones & Headsets</p></a>
              </div>
              <div className='second-two'>
                 <a href="#/tablets"><p className='drop-head'>Tablets & eReaders</p></a>
                 <a href=""><p>Every Day use Tablets below 15000</p></a>
                 <a href=""><p>Premium Tablets, Above 15001</p></a>
              </div>
              <div className='second-three'>
                <a href="#/power"><p className='drop-head'>Power Banks</p></a>
              </div>
              <div className='second-four'>
               <a href="#/eslates"> <p className='drop-head'>eSlates</p></a>
              </div>
          </div>

          <div className='Third-line'>
            <a href="#/robot"><p className='drop-head'>AI Learning Robots</p></a>
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
           <a href="#/televisions"> <p className='drop-head'>Televisions</p></a>
            <a href=""><p>Smart TVs</p></a>
            <a href=""><p>32 Inch TVs</p></a>
            <a href=""><p>43 Inch TVs</p></a>
            <a href=""><p>55 Inch TVs</p></a>
            <a href=""><p>Android TVs</p></a>
          </div>
          <div className='second-line'>
            <div className='second-one'>
            <a href="#/gaming"><p className='drop-head'>Gaming</p></a>
            <a href=""><p>Gaming Consoles</p></a>
            <a href=""><p>Gaming Accessories</p></a>
            <a href=""><p>Gaming Titles</p></a>
            <a href=""><p>Gaming Controllers</p></a>
            </div>
            <div className='second-two'>
            <a href="#/projectors"><p className='drop-head'>Projectors</p></a>
            </div>
            <div className='second-three'>
            <a href="#/streaming"><p className='drop-head'>Streaming Devices</p></a>
            </div>
          </div>
          <div className='third-line'>
            <div className="third-one">
            <a href=""><p className='drop-head'>Reconnect Disney | Marvel Audio Collection</p></a>
            </div>
            <div className="third-two">
            <a href="#/tv"><p className='drop-head'>TV & Audio Accessories</p></a>
            <a href="#/tv"><p>Virtual Reality Headsets</p></a>
            <a href="#/tv"><p>Stabilizers & Surge Protectors</p></a>
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
            <a href=""><p className='drop-head'>Headphones & Headsets</p></a>
            <a href=""><p>True Wireless</p></a>
            <a href=""><p>Bluetooth Neckbands</p></a>
            <a href=""><p>Earphones</p></a>
            <a href=""><p>Bluetooth Headphones</p></a>
            <a href=""><p>Gaming Headset</p></a>
            <a href=""><p>Wired Headphones</p></a>
        </div>
        <div className="second-line">
            <a href="#/speakers"><p className='drop-head'>Speakers & Soundbars</p></a>
            <a href="#/speakers"><p>Bluetooth Speakers</p></a>
            <a href="#/speakers"><p>Smart Speakers</p></a>
            <a href="#/speakers"><p>Home Theatre Systems</p></a>
            <a href="#/speakers"><p>Specialty Speakers</p></a>
            <a href="#/speakers"><p>Soundbars</p></a>
            <a href="#/speakers"><p>Party Speakers</p></a>
            <a href="#/speakers"><p>Multimedia Speakers</p></a>
        </div>
        <div className="third-line">
            <a href="#/musical"><p className='drop-head'>Musical Instruments</p></a>
            <a href="#/musical"><p>Guitars and Ukuleles</p></a>
            <a href="#/musical"><p>Microphones</p></a>
            <a href="#/musical"><p>Musical Keyboards</p></a>
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
              <a href="#/AirConditioners"><p className='drop-head'>Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>Split Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>Window Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>Smart Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>Energy Efficient Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>1 ton Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>1.5 ton Air Conditioners</p></a>
              <a href="#/AirConditioners"><p>5 star Air Conditioners</p></a>
            </div>
            <div className="first-two">
             <a href="#/AirCoolers"><p className='drop-head'>Air Coolers</p></a>
            </div>
            <div className="first-three">
             <a href="#/AirPurifiers"> <p className='drop-head'>Air Purifiers</p></a>
            </div>
          </div>
          <div className="second-line">
            <div className="second-one">
             <a href="#/WashingMachines"> <p className='drop-head'>Washing Machines</p></a>
             <a href="#/WashingMachines"><p>Fully Automatic Front Load</p></a>
             <a href="#/WashingMachines"> <p>Fully Automatic Top Load</p></a>
             <a href="#/WashingMachines"><p>Semi-Automatic Top Load</p></a>
            </div>
            <div className="second-two">
              <a href="#/Refrigerators"><p className='drop-head'>Refrigerators</p></a>
              <a href="#/Refrigerators"><p>Single Door</p></a>
              <a href="#/Refrigerators"><p>Double Door</p></a>
              <a href="#/Refrigerators"><p>Side by Side Refrigerators</p></a>
              <a href="#/Refrigerators"><p>Convertible</p></a>
            </div>
          </div>
          <div className="third-line">
            <div className="third-one">
              <a href="#/VacuumCleaners"><p className='drop-head'>Vacuum Cleaners</p></a>
              <a href="#/VacuumCleaners"><p>Robotic Vacuum Cleaners</p></a>
            </div>
            <a href="#/Radiators"><div className="third-two"><p className='drop-head'>Radiators</p></div></a>
            <div className="third-three"><p className='drop-head'>Dishwashers</p></div>
            <div className="third-four"><a href="#/Fans"><p className='drop-head'>Fans</p></a></div>
            <div className="third-five"><p className='drop-head'>Cloth Dryers</p></div>
            <div className="third-six"><a href="#/Geysers"><p className='drop-head'>Geysers</p></a></div>
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
              <a href="#/Laptops"><p className='drop-head'>Laptops</p></a>
              <a href="#/Laptops"><p>Basic use laptops</p></a>
              <a href="#/Laptops"><p>Student Laptops</p></a>
              <a href="#/Laptops"><p>Thin and light Laptops</p></a>
              <a href="#/Laptops"><p>Multi-Tasking Laptops</p></a>
              <a href="#/Laptops"><p>Gaming Laptops</p></a>
              <a href="#/Laptops"><p>Content creator Laptops</p></a>
            </div>
            <div className="first-two"><a href="#/Laptops"><p className='drop-head'>Computer Monitors</p></a></div>
            <div className="first-three"><a href="#/Laptops"><p className='drop-head'>Desktops & All-In-Ones</p></a></div>
          </div>
          <div className="second-line">
            <div className="second-one"><a href="#/Laptops"><p className='drop-head'>Bluetooth & WiFi Speakers</p></a></div>
            <div className="second-two">
            <a href="#/Laptops"><p className='drop-head'>Internet Connectivity Devices</p></a>
            <a href="#/Laptops"><p>Routers</p></a>
            <a href="#/Laptops"><p>WiFi Range Extenders</p></a>
            <a href="#/Laptops"><p>Wireless USB Adapters</p></a>
            </div>
            <div className="second-three">
            <a href="#/Laptops"><p className='drop-head'>Printers & Inks</p></a>
            <a href="#/Laptops"><p>Printers</p></a>
            <a href="#/Laptops"><p>Toners & Ink Cartridges</p></a>
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
            <a href="#/Laptops"><p className='drop-head'>Computer Accessories</p></a>
            <a href="#/Laptops"><p>Upto 72% Off, Only on Reliancedigital.in</p></a>
            <a href="#/Laptops"><p>Computer Networking Cables</p></a>
            <a href="#/Laptops"><p>Laptop Chargers & Adaptor</p></a>
            <a href="#/Laptops"><p>Laptop Batteries</p></a>
            <a href="#/Laptops"><p>Hubs & Docks</p></a>
            <a href="#/Laptops"><p>Laptop Bags & Sleeves</p></a>
            <a href="#/Laptops"><p>Laptop Cooling Pad</p></a>
            <a href="#/Laptops"><p>Laptop Screen Protectors</p></a>
            <a href="#/Laptops"><p>Laptop Tables & Stands</p></a>
            <a href="#/Laptops"><p>Mouse Pads</p></a>
            </div>
            <div className="third-two">
            <a href="#/Laptops"><p className='drop-head'>Input Devices</p></a>
            <a href="#/Laptops"><p>Keyboards</p></a>
            <a href="#/Laptops"><p>Computer Mouse</p></a>
            <a href="#/Laptops"><p>Stylus Pens</p></a>
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
            <div className="first-one"><a href="#/DSLRCameras"><p className='drop-head'>DSLR Cameras</p></a></div>
            <div className="first-two"><a href="#/MirrorlessCameras"><p className='drop-head'>Mirrorless Cameras</p></a></div>
            <div className="first-three"><a href="#/MirrorlessCameras"><p className='drop-head'>Point & Shoot Cameras</p></a></div>
            <div className="first-four"><a href="#/ProsumerCameras"><p className='drop-head'>ProSumer Cameras</p></a></div>
            <div className="first-five"><a href="#/ActionCameras"><p className='drop-head'>Action Cameras</p></a></div>
            <div className="first-six">
              <a href="#/PhotoStorageDevices"><p className='drop-head'>Photo Storage Devices</p></a>
              <p>Memory Cards</p>
              <p>Pen Drives</p>
            </div>
          </div>
          <div className="second-line">
            <div className="second-one">
            <a href="#/DSLRCameras"><p className='drop-head'>Binoculars</p></a>
            </div>
            <div className="second-two"><a href="#/DSLRCameras"><p className='drop-head'>Camera Lens</p></a></div>
            <div className="second-three">
            <a href="#/DSLRCameras"><p className='drop-head'>Digital Camera Accessories</p></a>
            <a href="#/DSLRCameras"><p>Camera Batteries & Chargers</p></a>
            <a href="#/DSLRCameras"><p>Camera bags & cases</p></a>
            <a href="#/DSLRCameras"><p>Tripods & Monopods</p></a>
            <a href="#/DSLRCameras"><p>Action Camera Accessories</p></a>
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
              <a href="#/KitchenAppliances"><p className='drop-head'>Mixers</p></a>
              <a href="#/KitchenAppliances"><p>2 Jar</p></a>
              <a href="#/KitchenAppliances"><p>3 Jar</p></a>
              <a href="#/KitchenAppliances"><p>4 Jar</p></a>
            </div>
            <div className="first-two"><a href="#/KitchenAppliances"><p className='drop-head'>Water Purifiers</p></a></div>
            <div className="first-three"><a href="#/KitchenAppliances"><p className='drop-head'>Electric Kettle</p></a></div>
            <div className="first-four">
            <a href="#/KitchenAppliances"><p className='drop-head'>Microwaves Oven</p></a>
            <a href="#/KitchenAppliances"><p>Convection</p></a>
            <a href="#/KitchenAppliances"><p>Solo & Grill</p></a>
            </div>
            <div className="first-five"><a href="#/KitchenAppliances"><p className='drop-head'>OTG</p></a></div>
            <div className="first-six"><a href="#/KitchenAppliances"><p className='drop-head'>Air Fryer</p></a></div>
            <div className="first-seven"><a href="#/KitchenAppliances"><p className='drop-head'>Food Processor</p></a></div>
           </div>
           <div className="second-line">
            <div className="second-one">
            <a href="#/KitchenAppliances"><p className='drop-head'>Cooktops</p></a>
            <a href="#/KitchenAppliances"><p>1 Burner</p></a>
            <a href="#/KitchenAppliances"><p>2 Burner</p></a>
            <a href="#/KitchenAppliances"><p>3 Burner</p></a>
            <a href="#/KitchenAppliances"><p>4 Burner</p></a>
            </div>
            <div className="second-two"><a href="#/KitchenAppliances"><p className='drop-head'>Induction Cooktops</p></a></div>
            <div className="second-three"><a href="#/KitchenAppliances"><p className='drop-head'>Rice Cooker</p></a></div>
            <div className="second-four"><a href="#/KitchenAppliances"><p className='drop-head'>Hobs</p></a></div>
            <div className="second-five"><a href="#/KitchenAppliances"><p className='drop-head'>Hoods/Chimneys</p></a></div>
            <div className="second-six"><a href="#/KitchenAppliances"><p className='drop-head'>Cookware</p></a></div>
           </div>
           <div className="third-line">
            <div className="third-one">
            <a href="#/KitchenAppliances"><p className='drop-head'>Juicer</p></a>
            <a href="#/KitchenAppliances"><p>1 Jar</p></a>
            <a href="#/KitchenAppliances"><p>2 Jar</p></a>
            <a href="#/KitchenAppliances"><p>3 Jar</p></a>
            <a href="#/KitchenAppliances"><p>4+ Jar</p></a>
            </div>
            <div className="third-two"><a href="#/KitchenAppliances"><p className='drop-head'>Hand Blender</p></a></div>
            <div className="third-three"><a href="#/KitchenAppliances"><p className='drop-head'>Hand Mixer</p></a></div>
            <div className="third-four"><a href="#/KitchenAppliances"><p className='drop-head'>Wet Grinder</p></a></div>
            <div className="third-five"><a href="#/KitchenAppliances"><p className='drop-head'>Coffee/Tea Makers</p></a></div>
            <div className="third-six"><a href="#/KitchenAppliances"><p className='drop-head'>Pop up Toasters</p></a></div>
            <div className="third-seven"><a href="#/KitchenAppliances"><p className='drop-head'>Sandwich Makers</p></a></div>
            <div className="third-eight"><a href="#/KitchenAppliances"><p className='drop-head'>Choppers</p></a></div>
           </div>
           <div className="fourth-line">
            <div className="fourth-one"><a href="#/KitchenAppliances"><p className='drop-head'>Specialty Appliances </p></a></div>
            <div className="fourth-two"><a href="#/KitchenAppliances"><p className='drop-head'>Electric Kettles</p></a></div>
            <div className="fourth-three"><a href="#/KitchenAppliances"><p className='drop-head'>Water Dispensers</p></a></div>
            <div className="fourth-four"><a href="#/KitchenAppliances"><p className='drop-head'>Flour Mills</p></a></div>
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
            <div className="first-one"><a href="#/PERSONALCARE"><p className='drop-head'>Shavers & Trimmers</p></a></div>
            <div className="first-two"><a href="#/PERSONALCARE"><p className='drop-head'>Epilators</p></a></div>
            <div className="first-three"><a href="#/PERSONALCARE"><p className='drop-head'>Hair Dryers & Stylers</p></a></div>
            <div className="first-four"><a href="#/PERSONALCARE"><p className='drop-head'>Weighing Scales</p></a></div>
            <div className="first-five"><a href="#/PERSONALCARE"><p className='drop-head'>Irons</p></a></div>
          </div>
          <div className="second-line">
            <div className="second-one">
            <a href="#/PERSONALCARE"><p className='drop-head'>Hygiene & Personal Care</p></a>
            <a href="#/PERSONALCARE"><p>Digital Thermometers</p></a>
            <a href="#/PERSONALCARE"><p>Massagers</p></a>
            <a href="#/PERSONALCARE"><p>Misc. Care Devices</p></a>
            </div>
            <div className="second-two">
            <a href="#/PERSONALCARE"><p className='drop-head'>Garment Steamers</p></a>
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
            <div className="first-one"><a href="#/Accessories"><p className='drop-head'>Bags, Cases & Sleeves</p></a></div>
            <div className="first-two">
              <a href="#/Accessories"><p className='drop-head'>Smart Devices</p></a>
              <a href="#/Accessories"><p>Smart Plugs</p></a>
              <a href="#/Accessories"><p>Smart Cameras</p></a>
              <a href="#/Accessories"><p>Smart Sensors</p></a>
              <a href="#/Accessories"><p>Smart Lights</p></a>
              <a href="#/Accessories"><p>Smart Speakers</p></a>
            </div>
            <div className="first-three"><a href="#/Accessories"><p className='drop-head'>Batteries</p></a></div>
            <div className="first-four"><a href="#/Accessories"><p className='drop-head'>Power Banks</p></a></div>
            <div className="first-five"><a href="#/Accessories"><p className='drop-head'>Cables & Cords</p></a></div>
            <div className="first-six"><a href="#/Accessories"><p className='drop-head'>Chargers & Adapters</p></a></div>
            <div className="first-seven"><a href="#/Accessories"><p className='drop-head'>Bluetooth & WiFi Speakers</p></a></div>
          </div>
          <div className="second-line">
            <div className="second-one"><a href="#/Accessories"><p className='drop-head'>Reconnect Disney | Marvel Accessories</p></a></div>
            <div className="second-two">
            <a href="#/Accessories"><p className='drop-head'>Data Storage Devices</p></a>
            <a href="#/Accessories"><p>Memory Cards</p></a>
            <a href="#/Accessories"><p>Pen Drives & OTG Drives</p></a>
            <a href="#/Accessories"><p>Hard Disks & SSD</p></a>
            </div>
            <div className="second-three">
            <a href="#/Accessories"><p className='drop-head'>Mounts & Stands</p></a>
            <a href="#/Accessories"><p>Air Conditioner Stands</p></a>
            <a href="#/Accessories"><p>Car Mobile Holders</p></a>
            <a href="#/Accessories"><p>Mobile Grips & Stands</p></a>
            </div>
            <div className="second-four"><a href="#/Accessories"><p className='drop-head'>Surge Protectors</p></a></div>
            <div className="second-five"><a href="#/Accessories"><p className='drop-head'>Webcams</p></a></div>
          </div>
          <div className="third-line">
            <div className='third-one'><a href="#/Accessories"><p className='drop-head'>Headphones & Headsets</p></a></div>
          <div className="third-two"><a href="#/Accessories"><p className='drop-head'>Cleaners & Protectors</p></a></div>
            <div className="third-three"><a href="#/Accessories"><p className='drop-head'>Computer Mouse</p></a></div>
            <div className="third-four"><a href="#/Accessories"><p className='drop-head'>Keyboards</p></a></div>
            <div className="third-five"><a href="#/Accessories"><p className='drop-head'>Indoor Lighting</p></a></div>
            <div className="third-six"><a href="#/Accessories"><p className='drop-head'>Office Electronics</p></a>
            <a href="#/Accessories"><p>Laminators</p></a>
            </div>
            <div className="third-seven"><a href="#/Accessories"><p className='drop-head'>Tyre Inflators </p></a></div>
            <div className="third-eight"><a href="#/Accessories"><p className='drop-head'>Routers</p></a></div>
            <div className="third-nine"><a href="#/Accessories"><p className='drop-head'>Screen Guards & Protectors</p></a></div>
            <div className="third-ten"><a href="#/Accessories"><p className='drop-head'>Power Strips & Extension Cords</p></a></div>
            <div className="third-ele"><a href="#/Accessories"><p className='drop-head'>Stabilizers</p></a></div>
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