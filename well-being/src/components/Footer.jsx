
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div>
          <h2>✚ Well Being</h2>
          <p>Your Health, Our Priority.</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h3>Customer Support</h3>
          <p>Email: support@wellbeing.demo</p>
          <p>Hours: Monday – Saturday</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Well Being. Academic demonstration project.
      </div>
    </footer>
  );
}

export default Footer;
