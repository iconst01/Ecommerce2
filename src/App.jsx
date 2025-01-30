import { BrowserRouter as Router, Routes, Route } from "react-router-dom";//import router components from react router
import Home from "./pages/Home";//import home component(home pg)
import Products from "./pages/Products";//import products component (product page)
import Contact from "./pages/Contact";//import contact component (for the contact page)

function App() {
  return (
    <Router>{/*the router component wraps all routes and allows navagation for spa */}
      <Routes>
        {/*the routes component holds all the routes of the app */}
        <Route path="/" element={<Home />} />{/*route specific path to home */}
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;//export the app component as the default export 
