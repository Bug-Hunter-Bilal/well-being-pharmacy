
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">

        <span className="not-found-icon">✚</span>

        <h1>404</h1>

        <h2>Oops! Page Not Found</h2>

        <p>
          The page you're looking for doesn't exist or may
          have been moved. Let's get you back on track.
        </p>

        <div className="not-found-buttons">
          <Link to="/" className="primary-btn">
            <Home size={18} />
            Back to Home
          </Link>

          <Link to="/shop" className="secondary-btn">
            <ArrowLeft size={18} />
            Explore Shop
          </Link>
        </div>

      </div>
    </section>
  );
}

export default NotFound;
