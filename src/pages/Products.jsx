import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";


const Products = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1 className="Products">Our Products</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

export default Products;
