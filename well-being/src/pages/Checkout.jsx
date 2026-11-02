
import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, ShoppingBag } from "lucide-react";

import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, cartTotal, clearCart } = useCart();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    address: ""
  });

  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setCustomer({
      ...customer,
      [name]: value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create a demo order reference
    const reference = "WB-" + Date.now().toString().slice(-8);

    setOrderNumber(reference);
    setOrderPlaced(true);

    // Empty the cart after placing the demo order
    clearCart();
  }

  // Demo order confirmation
  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <div className="order-success">
          <CheckCircle size={65} />

          <h1>Order Placed Successfully!</h1>

          <p>
            Thank you, {customer.name}. Your demo order has been
            recorded successfully.
          </p>

          <div className="order-reference">
            <span>Order Reference</span>
            <strong>{orderNumber}</strong>
          </div>

          <p className="payment-message">
            Payment Method: Cash on Delivery
          </p>

          <Link to="/shop" className="primary-btn">
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  // Empty cart message
  if (cart.length === 0) {
    return (
      <section className="checkout-page">
        <div className="checkout-empty">
          <ShoppingBag size={55} />
          <h2>Your cart is empty</h2>
          <p>Add some products before proceeding to checkout.</p>

          <Link to="/shop" className="primary-btn">
            Explore Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="checkout-heading">
        <span>ALMOST THERE</span>
        <h1>Checkout</h1>
        <p>Enter your delivery details to complete your order.</p>
      </div>

      <div className="checkout-layout">

        {/* Customer Information Form */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Delivery Information</h2>

          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={customer.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="example@email.com"
                value={customer.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                type="tel"
                name="phone"
                placeholder="03XXXXXXXXX"
                value={customer.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              name="city"
              placeholder="Enter your city"
              value={customer.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="address">Complete Delivery Address</label>
            <textarea
              id="address"
              name="address"
              placeholder="House number, street, area, etc."
              rows="4"
              value={customer.address}
              onChange={handleChange}
              required
            />
          </div>

          <h2 className="payment-heading">Payment Method</h2>

          <div className="payment-option">
            <input
              type="radio"
              id="cod"
              name="payment"
              value="cod"
              defaultChecked
            />

            <label htmlFor="cod">
              <strong>Cash on Delivery</strong>
              <span>Pay when your order is delivered.</span>
            </label>
          </div>

          <button type="submit" className="place-order-btn">
            Place Order
          </button>

          <p className="demo-notice">
            This is an academic demonstration. No real payment
            or delivery service is connected.
          </p>
        </form>

        {/* Order Summary */}
        <div className="checkout-summary">
          <h2>Your Order</h2>

          {cart.map((item) => (
            <div className="checkout-product" key={item.id}>
              <img src={item.image} alt={item.name} />

              <div className="checkout-product-info">
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
              </div>

              <strong>
                Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
              </strong>
            </div>
          ))}

          <div className="checkout-total">
            <span>Total Amount</span>
            <strong>
              Rs. {cartTotal.toLocaleString("en-PK")}
            </strong>
          </div>

          <Link to="/cart" className="back-to-cart">
            Return to Cart
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Checkout;
