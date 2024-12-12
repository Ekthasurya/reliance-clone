import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Css/SmartphonesSingle.css";

// Use Vite's environment variables directly (import.meta.env)

const razorpayKeyId = __APP_ENV_VARS__.RAZORPAY_KEY_ID;


const SmartphonesSingle = ({ addToCart }) => {
  
  
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState("");
  const [razorpayScriptLoaded, setRazorpayScriptLoaded] = useState(false); // Track script load status

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

  // Dynamically load Razorpay script
  useEffect(() => {
    const loadRazorpayScript = () => {
      // Prevent loading the script more than once
      if (document.getElementById("razorpay-script")) return;

      const script = document.createElement("script");
      script.id = "razorpay-script";
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => setRazorpayScriptLoaded(true); // Mark script as loaded
      script.onerror = () => {
        setError("Failed to load Razorpay script.");
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

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

  // Handle Buy Now with Razorpay
  const handleBuyNow = async () => {
    if (!razorpayScriptLoaded) {
      console.error("Razorpay script not loaded yet.");
      alert("Razorpay script not loaded. Please try again later.");
      return;
    }

    if (!razorpayKeyId) {
      console.error("Razorpay Key ID is missing.");
      alert("Razorpay Key ID is missing.");
      return;
    }

    try {
      const response = await fetch(
        "https://reliance-clone-3.onrender.com/razor/createOrder",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: product.price * 100, // Razorpay expects the amount in paise (1 INR = 100 paise)
            currency: "INR",
          }),
        }
      );
      const order = await response.json();

      // Razorpay checkout options
      const options = {
        key: razorpayKeyId,
        amount: order.amount,
        currency: order.currency,
        name: "Your Store Name",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          const verifyRes = await fetch(
            "https://reliance-clone-3.onrender.com/razor/verifyPayment",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                order_id: response.razorpay_order_id,
                payment_id: response.razorpay_payment_id,
                signature: response.razorpay_signature,
              }),
            }
          );

          const result = await verifyRes.json();
          if (result.status === "success") {
            alert("Payment Successful!");
          } else {
            alert("Payment Verification Failed");
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#F37254",
        },
      };

      // Check if Razorpay is available
      if (window.Razorpay) {
        const razorpayInstance = new window.Razorpay(options);
        razorpayInstance.open();
      } else {
        console.error("Razorpay is not loaded.");
        alert("Razorpay is not loaded. Please try again later.");
      }
    } catch (error) {
      console.error("Error during payment:", error);
      alert("Error during payment. Please try again later.");
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
              <button onClick={handleBuyNow} className="buy-button">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartphonesSingle;
