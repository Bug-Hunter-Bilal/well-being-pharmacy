
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

import { useCart } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <div className="product-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} />
        </Link>

        <span className="product-category">
          {product.category}
        </span>
      </div>

      <div className="product-info">
        <Link
          to={`/product/${product.id}`}
          className="product-title-link"
        >
          <h3>{product.name}</h3>
        </Link>

        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">
            Rs. {product.price.toLocaleString("en-PK")}
          </span>

          <button
            className="add-cart-btn"
            onClick={() => addToCart(product)}
          >
            <ShoppingCart size={17} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
