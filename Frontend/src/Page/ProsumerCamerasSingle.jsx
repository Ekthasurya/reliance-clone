import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/SmartphonesSingle.css";


const ProsumerCamerasSingle = ({ addToCart }) => {
  
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
 

  // Fetch product details
  const fetchProduct = async () => {
    try {
      if (!id) {
        throw new Error("Product ID is missing.");
      }
      const response = await fetch(
        `https://reliance-clone-3.onrender.com/product/${id}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProduct(data);
      setCurrentImage(data.image[0]);
    } catch (error) {
      console.error("Error fetching product:", error);
      setError(error.message || "Failed to fetch product details. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);


  // Handle thumbnail click
  const handleThumbnailClick = (image) => {
    setCurrentImage(image);
  };

  // Handle add to cart
  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className="product-detail">
      <div className="image-display">
        <div className="large-image">
          <img
            src={currentImage}
            alt={product.name}
            style={{ width: "400px", margin: "10px" }}
          />
        </div>

        <div className="thumbnail-images">
          {product.image.map((img, idx) => (
            <div
              key={idx}
              className="thumbnail"
              onClick={() => handleThumbnailClick(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx}`}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  margin: "10px",
                  cursor: "pointer",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="Basic-details">
        <h1 className="details-head">{product.name}</h1>
        <div className="pre-dis">
          <div className="des-dis">
            <p>
              <strong>Description:</strong> {product.description}
            </p>

            <div>
              <strong>Discounts:</strong>
              <ul>
                {product.discount.map((d, idx) => (
                  <li key={idx}>{d}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pre">
            <p>
              <strong>Deal Price:</strong> ₹{product.price} Only
            </p>
            <p>
              <strong>Rating:</strong> {product.rating} ⭐
            </p>
            <p>
              <strong>EMI:</strong> ₹{product.emi}/month in Two Years
            </p>
            <div className="cart-buy">
              <button onClick={handleAddToCart} className="cart-button">
                ADD TO CART
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProsumerCamerasSingle;
