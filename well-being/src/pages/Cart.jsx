
import { Link } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingBag,
  ArrowRight
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    cartTotal
  } = useCart();

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <span>YOUR SHOPPING BAG</span>
        <h1>Shopping Cart</h1>
        <p>Review your selected healthcare products.</p>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <ShoppingBag size={55} />
          <h2>Your cart is empty</h2>
          <p>
            You haven't added any products to your cart yet.
          </p>
          <Link to="/shop" className="primary-btn">
            Explore Products
            <ArrowRight size={18} />
          </Link>
        </div>
      ) : (
        <div className="cart-layout">

          {/* Cart Products */}
          <div className="cart-items">
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-product-image"
                />

                <div className="cart-product-details">
                  <span className="cart-category">
                    {item.category}
                  </span>

                  <h3>{item.name}</h3>

                  <p className="cart-item-price">
                    Rs. {item.price.toLocaleString("en-PK")}
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity - 1)
                      }
                      disabled={item.quantity <= 1}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, item.quantity + 1)
                      }
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>

                <div className="cart-item-right">
                  <strong>
                    Rs. {(item.price * item.quantity).toLocaleString("en-PK")}
                  </strong>

                  <button
                    className="remove-item"
                    onClick={() => removeFromCart(item.id)}
                    aria-label={`Remove ${item.name}`}
                  >
                    <Trash2 size={18} />
                    Remove
                  </button>
                </div>

              </div>
            ))}

            <Link to="/shop" className="continue-shopping">
              <ArrowRight size={16} />
              Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                Rs. {cartTotal.toLocaleString("en-PK")}
              </span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                Rs. {cartTotal.toLocaleString("en-PK")}
              </strong>
            </div>

            <p className="summary-note">
              Delivery charges, if applicable, will be shown during checkout.
            </p>
            <Link to="/checkout" className="checkout-btn">
              Proceed to Checkout
            </Link>
          </div>

        </div>
      )}
    </section>
  );
}

export default Cart;
