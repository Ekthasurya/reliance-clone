import React from "react";
import "../Css/CartPage.css"

const CartPage = ({ cart, setCart }) => {
  // Calculate total price and total quantity
  const totalItems = cart.length;
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleRemove = (indexToRemove) => {
    // Remove the item at the specified index
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  return (
    <div className="cart-page">
      <h1>Your Cart - </h1>
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          {/* Display total items and total price */}
          <div className="cart-head">
            <h2>Total Items: {totalItems}</h2>
            <h2>Total Price: ₹{totalPrice}</h2>
          </div>

          <ul className="cart-grid">
            {cart.map((item, index) => (
              <li key={index} style={{ marginBottom: "20px", listStyle: "none" }} className="cart-cover">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.price}</p>
                <p>Category: {item.category}</p>
                <img
                  src={item.image[0]}
                  alt={item.name}
                  style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <br />
                <button
                  onClick={() => handleRemove(index)}
                  style={{
                    marginTop: "10px",
                    padding: "8px 12px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default CartPage;
