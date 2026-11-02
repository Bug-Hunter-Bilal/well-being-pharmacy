
import { Link, useParams } from "react-router-dom";
import { ShoppingCart, ArrowLeft, CheckCircle } from "lucide-react";

import products from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  // Find the selected product using its ID
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Display a message if the product does not exist
  if (!product) {
    return (
      <section className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, we couldn't find the product you're looking for.</p>

        <Link to="/shop" className="primary-btn">
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
      </section>
    );
  }

  return (
    <section className="product-details-page">
      <Link to="/shop" className="details-back-link">
        <ArrowLeft size={17} />
        Back to Shop
      </Link>

      <div className="product-details-container">

        {/* Product Image */}
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Information */}
        <div className="details-info">
          <span className="details-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <div className="details-price">
            Rs. {product.price.toLocaleString("en-PK")}
          </div>

          <p className="details-description">
            {product.description}
          </p>

          <div className="details-benefits">
            <div>
              <CheckCircle size={18} />
              Quality-focused product selection
            </div>

            <div>
              <CheckCircle size={18} />
              Convenient online shopping
            </div>

            <div>
              <CheckCircle size={18} />
              Easy order placement
            </div>
          </div>

          <button
            className="details-add-btn"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={19} />
            Add to Cart
          </button>

          <p className="details-note">
            This product is part of the Well Being academic
            demonstration store.
          </p>
        </div>

      </div>
    </section>
  );
}

export default ProductDetails;
