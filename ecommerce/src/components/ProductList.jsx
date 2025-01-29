import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";  
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("");  // for sorting products
  const [filterCategory, setFilterCategory] = useState("");  // for filtering by category
  const [searchQuery, setSearchQuery] = useState("");  // for search/filter by name

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle sorting of products
  const handleSort = (e) => {
    setSortBy(e.target.value);
  };

  // Handle filtering products by category
  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);
  };

  // Handle searching products by name
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  // Filter products based on search query and category
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery) &&
      (filterCategory ? product.category === filterCategory : true)
    );

  // Sort the filtered products based on selected sort option
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-4">
        {/* Search Input */}
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}
        />

        {/* Filter Dropdown (for categories) */}
        <select className="form-select w-25" value={filterCategory} onChange={handleFilterCategory}>
          <option value="">Filter by category</option>
          {/* Add more categories based on your data */}
          <option value="Digital">Digital</option>
          <option value="Digital">Classic</option>
         
        </select>

        {/* Sort Dropdown */}
        <select className="form-select w-25" value={sortBy} onChange={handleSort}>
          <option value="">Sort by</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
          <option value="name-asc">Name (A to Z)</option>
          <option value="name-desc">Name (Z to A)</option>
        </select>
      </div>

      <div className="row">
        {sortedProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
