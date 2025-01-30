import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";

//define the products component
const Products = () => {
  return (
    <div>
      <Navbar />
      {/*main content area where the product list will be displayed */}
      <main>
        <h1 className="Products">Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
