import { useState, useEffect } from "react";//import hooks to manage state and side effects
import axios from "axios";//import axios for making API request to backend
import ProductCard from "./ProductCard";  //import productcard component to display individual product 
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap for styling and layout

const ProductList = () => { //declare state variables to hold product data, sorting/filtering/searching criteria
  const [products, setProducts] = useState([]);//state to store fetched products 
  const [sortBy, setSortBy] = useState("");  // state for sorting criteria 
  const [filterCategory, setFilterCategory] = useState("");  // state for filtering by category
  const [searchQuery, setSearchQuery] = useState("");  // state for storing the search query
  useEffect(() => {
    //fetching product from backend api 
    const fetchProducts = async () => {
      try {
        const response = await axios.get("api/products");//make the get request to the api
        setProducts(response.data);//store the fetched data in the product state
      } catch (error) {
        console.error("Error fetching products:", error);//log any errors if fetching fails
      }
    };

    fetchProducts();//call the function to fetch products
  }, []);//empty array ensures this runs only once when the component is mounted 

  // Handle sorting of products
  const handleSort = (e) => {
    setSortBy(e.target.value);//update the sortby when the user selects a new sort option
  };

  // Handle filtering products by category
  const handleFilterCategory = (e) => {
    setFilterCategory(e.target.value);//update the filtercategory state when a category is selected 
  };

  // Handle searching products by name
  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());//convert search query to lowercase and update searchquery state
  };

  // Filter products based on search query and category
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery) &&//check if the products name includes the search query 
      (filterCategory ? product.category === filterCategory : true)//check if the products category matches the select filter 
    );

  // Sort the filtered products based on selected sort option
  const sortedProducts = filteredProducts.sort((a, b) => {
    switch (sortBy) {
      case "price-asc"://if sorting by price (low to high)
        return a.price - b.price;
      case "price-desc"://if sorting by price (high to low)
        return b.price - a.price;
      case "name-asc"://if sorting by name (a-z)
        return a.name.localeCompare(b.name);
      case "name-desc"://if sorting by name (z-a)
        return b.name.localeCompare(a.name);
      default:
        return 0;//if no sorting option is selected, return the original order 
    }
  });

  return (
    <div className="container mt-4">{/*main container*/}
      <div className="d-flex justify-content-between mb-4">{/*layout for the search bar,filter, and sort dropdowns*/}
        {/* Search Input */}
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearch}//calls handleSearch on change
        />

        {/* Filter Dropdown (for categories)  select lets the user pick a category*/}
        <select className="form-select w-25" value={filterCategory} onChange={handleFilterCategory}>{/*bind select to filter state and when select update state*/}
          <option value="">Filter by category</option>
          {/* category option */}
          <option value="Digital">Digital</option>
          <option value="Classic">Classic</option>
         
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
        {/*render the filtered and sorted product cards */}
        {sortedProducts.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <ProductCard product={product} />{/*products details to productcard component*/}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
