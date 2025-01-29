import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Css/PaymentPage.css";

const PaymentPage = ({ totalPrice }) => {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [upiId, setUpiId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handlePayment = () => {
    if (paymentMethod === "") {
      alert("Please select a payment method!");
    } else if (paymentMethod === "ATM Card") {
      if (
        cardDetails.cardNumber === "" ||
        cardDetails.expiryDate === "" ||
        cardDetails.cvv === ""
      ) {
        alert("Please fill in all card details!");
      } else {
        setIsModalOpen(true); // Open modal for ATM Card payment
      }
    } else if (paymentMethod === "UPI") {
      if (upiId === "") {
        alert("Please enter your UPI ID!");
      } else {
        setIsModalOpen(true); // Open modal for UPI payment
      }
    }
  };

  const handleNavigateToHome = () => {
    setIsModalOpen(false); // Close the modal
    navigate("/"); // Navigate to the homepage
  };

  return (
    <div className="payment-page">
      <h1>Payment Page</h1>
      <h2>Total Amount: ₹{totalPrice}</h2>

      <div>
        <h3>Select Payment Method:</h3>
        <div>
          <input
            type="radio"
            id="atmCard"
            name="paymentMethod"
            value="ATM Card"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="atmCard">ATM Card</label>
        </div>
        <div>
          <input
            type="radio"
            id="upi"
            name="paymentMethod"
            value="UPI"
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <label htmlFor="upi">UPI</label>
        </div>
      </div>

      {/* Conditional Rendering for Payment Details */}
      {paymentMethod === "ATM Card" && (
        <div className="card-details">
          <h3>Enter Card Details:</h3>
          <input
            type="text"
            placeholder="Card Number"
            value={cardDetails.cardNumber}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Expiry Date (MM/YY)"
            value={cardDetails.expiryDate}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, expiryDate: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cvv: e.target.value })
            }
          />
        </div>
      )}

      {paymentMethod === "UPI" && (
        <div className="upi-details">
          <h3>Enter UPI ID:</h3>
          <input
            type="text"
            placeholder="Your UPI ID"
            value={upiId}
            onChange={(e) => setUpiId(e.target.value)}
          />
        </div>
      )}

      <button
        onClick={handlePayment}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Pay Now
      </button>

      {/* Styled Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Payment Successful</h2>
            <p>
              You have successfully paid ₹{totalPrice} via {paymentMethod}.
            </p>
            <button
              onClick={handleNavigateToHome}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                backgroundColor: "green",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Go to Homepage
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;
