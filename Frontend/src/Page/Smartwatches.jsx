import React, { useEffect, useState } from 'react'
import "../Css/Smartphones.css"
import { Link } from 'react-router-dom';

const Smartwatches = () => {
    const minPrice = 223;
    const maxPrice = 1960;

    const [minValue, setMinValue] = useState(minPrice);
    const [maxValue, setMaxValue] = useState(maxPrice);

    const handleThumbMove = (type, percentage) => {
        const value = Math.round(minPrice + (percentage * (maxPrice - minPrice)) / 100);

        if (type === 'min') {
            if (value >= maxValue) return;
            setMinValue(value);
        } else {
            if (value <= minValue) return;
            setMaxValue(value);
        }
    };

    const handleMouseDown = (type) => {
        const onMouseMove = (event) => {
            const slider = document.querySelector('.slider-container');
            const rect = slider.getBoundingClientRect();
            const offsetX = Math.min(Math.max(event.clientX - rect.left, 0), rect.width);
            const percentage = (offsetX / rect.width) * 100;
            handleThumbMove(type, percentage);
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };

    const handleInputChange = (type, value) => {
        value = Math.max(minPrice, Math.min(value, maxPrice));
        if (type === 'min' && value < maxValue) {
            setMinValue(value);
        } else if (type === 'max' && value > minValue) {
            setMaxValue(value);
        }
    };

    const handleGoClick = () => {
        alert(`Min: ₹${minValue}, Max: ₹${maxValue}`);
    };



    const [products, setProducts] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc"); // Default sort order
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        const category = "Smartwatches"; // Hardcoded category
        try {
            const response = await fetch(
                `https://reliance-clone-3.onrender.com/product/view-pro?filterBy=category&filterValue=${category}&sortBy=price&order=${sortOrder}`
            );
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data.products || []);
        } catch (error) {
            console.error("Error fetching products:", error);
            setError("Failed to fetch products. Please try again later.");
        }
    };

    // Fetch products on mount and whenever sortOrder changes
    useEffect(() => {
        fetchProducts();
    }, [sortOrder]);

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };


    return (
        <>
            <div className='parent'>
                <div className='filter'>
                    <div className='headbox'>
                        <p>FILTERS</p>
                    </div>
                    <div className="price-filter">
                        <h4>Price</h4>
                        <div className="slider-container">
                            <div className="slider-track"></div>
                            <div
                                className="slider-thumb"
                                style={{ left: `${((minValue - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                                onMouseDown={() => handleMouseDown('min')}
                            ></div>
                            <div
                                className="slider-thumb"
                                style={{ left: `${((maxValue - minPrice) / (maxPrice - minPrice)) * 100}%` }}
                                onMouseDown={() => handleMouseDown('max')}
                            ></div>
                        </div>
                        <div className="price-values">
                            <span>₹{minValue}</span>
                            <span>₹{maxValue}</span>
                        </div>
                        <div className="input1-container">
                            <div>
                                <label>Min.</label>
                                <input
                                    type="number"
                                    value={minValue}
                                    onChange={(e) => handleInputChange('min', parseInt(e.target.value))}
                                />
                            </div>
                            <span>to</span>
                            <div>
                                <label>Max.</label>
                                <input
                                    type="number"
                                    value={maxValue}
                                    onChange={(e) => handleInputChange('max', parseInt(e.target.value))}
                                />
                            </div>
                            <button onClick={handleGoClick}>GO</button>
                        </div>
                    </div>


                    <div className='cover-check'>
                        <p>Availability</p>
                        <div class="checkbox-container">
                            <input type="checkbox" id="out-of-stock-checkbox" />
                            <label for="out-of-stock-checkbox">Exclude out of Stock</label>
                        </div>
                    </div>

                    <div className='cover-check'>
                        <p>Discount Percent</p>
                        <div class="checkbox-container">
                            <input type="checkbox" id="out-of-stock-checkbox" />
                            <label for="out-of-stock-checkbox">60% or more</label>
                        </div>
                    </div>

                </div>
                <div className='pro'>
                    <div>
                        <div className='product-head'>
                            <h1>Smartphones</h1>
                            <div className='sorting-button-cover'>
                                <p>Sort By</p>
                                <button
                                    onClick={() => setSortOrder("asc")}
                                    style={{
                                        padding: "5px",
                                        marginRight: "10px",
                                        cursor: "pointer",
                                        backgroundColor: sortOrder === "asc" ? "#007BFF" : "#f0f0f0",
                                        color: sortOrder === "asc" ? "#fff" : "#000",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        fontSize: "10px"
                                    }}
                                >
                                    Price(Low-High)
                                </button>
                                <button
                                    onClick={() => setSortOrder("desc")}
                                    style={{
                                        padding: "5px",
                                        cursor: "pointer",
                                        backgroundColor: sortOrder === "desc" ? "#007BFF" : "#f0f0f0",
                                        color: sortOrder === "desc" ? "#fff" : "#000",
                                        border: "1px solid #ddd",
                                        borderRadius: "5px",
                                        fontSize: "10px"
                                    }}
                                >
                                    Price(High-Low)
                                </button>
                            </div>

                        </div>

                        <div className="product-list">
                            {error ? (
                                <p>{error}</p>
                            ) : products.length === 0 ? (
                                <p>Smartphones</p>
                            ) : (
                                products.map((product) => (
                                    <a href={`#/smartwatches/${product._id}`}  key={product._id}>
                                    <div className="product-card" >
                                        <div>
                                            {product.image.length > 0 && (
                                                <img
                                                    src={product.image[0]}
                                                    alt={product.name}
                                                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                                                />
                                            )}
                                        </div>

                                        <h2>{product.name}</h2>
                                        <p>
                                            <strong>Price:</strong> ₹{product.price}
                                        </p>

                                    </div>
                                    </a>
                                ))
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Smartwatches