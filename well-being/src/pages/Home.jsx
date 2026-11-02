
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  HeartHandshake
} from "lucide-react";

function Home() {
  const categories = [
    {
      name: "Skincare",
      category: "Skincare",
      image:
        "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500",
      alt: "Skincare products"
    },
    {
      name: "Personal Care",
      category: "Baby Care",
      image:
        "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=500",
      alt: "Personal care products"
    },
    {
      name: "Healthcare",
      category: "Healthcare",
      image:
        "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500",
      alt: "Healthcare products"
    },
    {
      name: "Vitamins",
      category: "Vitamins",
      image:
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=500",
      alt: "Vitamins"
    }
  ];

  return (
    <div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <span className="hero-tag">
            YOUR HEALTH, OUR PRIORITY
          </span>

          <h1>
            Take Care of Your Health,
            <span> Every Day.</span>
          </h1>

          <p>
            Discover healthcare essentials, wellness products,
            vitamins and skincare products in one convenient place.
          </p>

          <Link to="/shop" className="primary-btn">
            Explore Products
            <ArrowRight size={18} />
          </Link>

          <div className="hero-benefits">
            <span>✓ Quality Products</span>
            <span>✓ Easy Shopping</span>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900"
            alt="Healthcare professional"
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories section-container">

        <div className="section-heading">
          <span>EXPLORE OUR COLLECTION</span>
          <h2>Shop by Category</h2>
          <p>Find the products you need for everyday wellness.</p>
        </div>

        <div className="category-grid">

          {categories.map((category) => (
            <Link
              to={`/shop?category=${encodeURIComponent(category.category)}`}
              className="category-card"
              key={category.name}
            >
              <img
                src={category.image}
                alt={category.alt}
              />

              <h3>{category.name}</h3>
            </Link>
          ))}

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">

        <div className="section-heading">
          <span>WHY WELL BEING?</span>
          <h2>Your Wellness Matters to Us</h2>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <ShieldCheck size={35} />
            <h3>Quality First</h3>
            <p>Carefully selected products from trusted sources.</p>
          </div>

          <div className="feature-card">
            <Truck size={35} />
            <h3>Convenient Shopping</h3>
            <p>Explore healthcare essentials from anywhere.</p>
          </div>

          <div className="feature-card">
            <HeartHandshake size={35} />
            <h3>Customer Care</h3>
            <p>We put customer satisfaction and wellness first.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;
