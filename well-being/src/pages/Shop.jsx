
import { useState } from "react";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  // Read the selected category from the URL
  const selectedCategory = searchParams.get("category") || "All";

  const categories = [
    "All",
    "Vitamins",
    "Skincare",
    "Baby Care",
    "Healthcare"
  ];

  // Update the category in the URL
  function handleCategoryChange(category) {
    if (category === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  }

  // Filter products by search term and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="shop-page">
      <div className="shop-heading">
        <span>OUR COLLECTION</span>
        <h1>Shop Healthcare Products</h1>
        <p>
          Explore our collection of healthcare and wellness essentials.
        </p>
      </div>

      <div className="shop-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="category-filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              selectedCategory === category ? "active-filter" : ""
            }
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-products">
            <h3>No products found</h3>
            <p>Try another product name or category.</p>
          </div>
        )}
      </div>

      <p className="product-results">
        Showing {filteredProducts.length} products
      </p>
    </section>
  );
}

export default Shop;
