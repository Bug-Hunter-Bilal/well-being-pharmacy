
import { Link } from "react-router-dom";
import {
  Heart,
  ShieldCheck,
  ShoppingBag,
  Users,
  ArrowRight
} from "lucide-react";

function About() {
  const values = [
    {
      icon: <Heart size={28} />,
      title: "Customer Care",
      description:
        "We believe in making the shopping experience simple, friendly and convenient."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Focus",
      description:
        "Our demo store highlights a carefully organized selection of wellness products."
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Easy Shopping",
      description:
        "Browse categories, explore products and place demonstration orders with ease."
    },
    {
      icon: <Users size={28} />,
      title: "Customer First",
      description:
        "We aim to create a user-friendly experience that puts customer needs first."
    }
  ];

  return (
    <section className="about-page">

      {/* About Hero */}
      <div className="about-hero">
        <span>ABOUT WELL BEING</span>
        <h1>Your Health and Wellness Matter</h1>
        <p>
          Welcome to Well Being, an online pharmacy storefront
          designed to make healthcare and wellness shopping
          simple and convenient.
        </p>

        <Link to="/shop" className="primary-btn">
          Explore Products
          <ArrowRight size={18} />
        </Link>
      </div>

      {/* Our Story */}
      <div className="about-story">
        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900"
            alt="Healthcare professional in a clinical setting"
          />
        </div>

        <div className="story-content">
          <span>OUR STORY</span>
          <h2>A Simple Approach to Online Wellness Shopping</h2>

          <p>
            Well Being is a student-developed e-commerce
            website project built using React.js. It demonstrates
            how modern web technologies can create a convenient
            online shopping experience.
          </p>

          <p>
            From browsing products to managing a shopping cart
            and completing a demo checkout, our goal is to show
            how an online pharmacy storefront can work.
          </p>

          <Link to="/shop" className="story-link">
            Browse Our Products
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-section">
        <span>OUR MISSION</span>
        <h2>Making Online Shopping Simple</h2>
        <p>
          Our mission is to demonstrate an accessible and
          user-friendly online platform where customers can
          explore healthcare and wellness product categories
          through a simple digital experience.
        </p>
      </div>

      {/* Values */}
      <div className="values-section">
        <div className="values-heading">
          <span>WHAT WE STAND FOR</span>
          <h2>Our Core Values</h2>
          <p>The principles behind the Well Being experience.</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">
                {value.icon}
              </div>

              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default About;
