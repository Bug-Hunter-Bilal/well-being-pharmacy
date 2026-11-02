
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  Search,
  Menu,
  X
} from "lucide-react";

import { useCart } from "../context/CartContext";

function Navbar() {
  const { cartCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* Website Logo */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-icon">✚</span>
          Well Being
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </div>

        {/* Navigation Actions */}
        <div className="nav-actions">

          <Link to="/shop" aria-label="Search products">
            <Search size={20} />
          </Link>

          <Link to="/cart" className="cart-icon" aria-label="Shopping cart">
            <ShoppingBag size={21} />
            <span className="cart-count">{cartCount}</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <div className="mobile-nav">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/about" onClick={closeMenu}>About Us</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/cart" onClick={closeMenu}>
            Shopping Cart ({cartCount})
          </Link>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
