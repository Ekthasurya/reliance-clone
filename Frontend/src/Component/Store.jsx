import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
import "../Css/Store.css";

// Dummy Store data for the purpose of display
const stores = [
  { name: "Reliance Digital Store - Mumbai", address: "Andheri East, Mumbai", contact: "022-12345678" },
  { name: "Reliance Digital Store - Delhi", address: "Connaught Place, Delhi", contact: "011-87654321" },
  { name: "Reliance Digital Store - Bangalore", address: "MG Road, Bangalore", contact: "080-99887766" },
];

const Store = () => {
  const [location, setLocation] = useState("");
  const [filteredStores, setFilteredStores] = useState(stores);

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = () => {
    const filtered = stores.filter(store => store.address.toLowerCase().includes(location.toLowerCase()));
    setFilteredStores(filtered);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Use a mock location based on the geolocation (this would ideally be mapped to actual stores in a real app)
        setLocation("Your Location: Latitude - " + position.coords.latitude + " Longitude - " + position.coords.longitude);
        setFilteredStores(stores);  // Show all stores for demonstration
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="store-page">
      {/* Breadcrumb */}
      <div className="Link-top">
        <div><FaHome /></div>
        <div><IoIosArrowForward /></div>
        <div><p>Find a store</p></div>
      </div>

      {/* Store Heading Section */}
      <div className="store-head">
        <div className="first-store">
          <p className="first-para">Reliance Digital Store & Service Center</p>
          <p className="second-para">near you</p>
          <div className="store-logo-one"><RiUserLocationFill size={22} /></div>
        </div>
      </div>

      {/* Search Section */}
      <div className="search-section">
        <div className="location-search">
          <input
            type="text"
            placeholder="Enter your location or pin code"
            value={location}
            onChange={handleLocationChange}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <p>or Use</p>
        <div className="use-location">
          <button onClick={handleUseCurrentLocation}>
            <RiUserLocationFill size={22} />
            Use My Location
          </button>
        </div>
      </div>

      {/* Store Listings Section */}
      <div className="store-listings">
        <h3>Nearby Stores</h3>
        {filteredStores.length > 0 ? (
          <ul>
            {filteredStores.map((store, index) => (
              <li key={index} className="store-item">
                <h4>{store.name}</h4>
                <p>{store.address}</p>
                <p>Contact: {store.contact}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No stores found for the selected location.</p>
        )}
      </div>
    </div>
  );
};

export default Store;
