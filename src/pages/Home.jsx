import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";//import slick css styles for the carousel
import "slick-carousel/slick/slick-theme.css";//import slick them css styles 


import './../App.css';

const Home = () => {
  // Slider settings for customer reviews
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,//transition speed in milliseconds
    slidesToShow: 1,//show one slide at the time 
    slidesToScroll: 1,//scroll one slide at a time 
    autoplay: true,//autoplay
    autoplaySpeed: 5000,//set aoutplay speed to 5 sec 
    arrows: false, //no arrows
  };

  // Example customer reviews
  const reviews = [
    {
      name: "Summer T, NP.",
      review: "The digital stethoscope has been a game changer in my practice. The noise cancellation and clarity are amazing. Highly recommend!",
      rating: 5,
    },
    {
      name: "Sarah G, NP.",
      review: "The classic stethoscope is so comfortable and reliable. I've been using it for years, and it’s still going strong. Great quality!",
      rating: 4,
    },
    {
      name: "Dr. Kwon S.",
      review: "I was a bit skeptical at first, but after using this stethoscope, I noticed a huge difference in sound clarity. Excellent product!",
      rating: 5,
    },

  ];

  return (
    <div>
      <Navbar />
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <h1 className="listen">Listen with precision</h1>
          <h2 className="decriptHero">
            Your one-stop shop for quality Stethoscopes. We provide quality
            products for quality medical care.
          </h2>
          <button><Link to="/products">Shop Now</Link></button>
        </div>
        <img className='Heroimg' src="images/Hero.jpeg" alt="Detect Murmurs" />
      </header>

      {/* Product Cards */}
      <section className="product-cards">
        <div className="card digstet">
          <img src="images/digstet.jpeg" alt="Digital Stethoscope" />
          <h2>Digital Stethoscope</h2>
          <p>
            Exceptional precision and clarity. Filters out noise interference and
            amplifies the desired frequencies.
          </p>
          <button><Link to="/products">Shop</Link></button>
        </div>

        <div className="card classtet">
          <img src="images/classic.jpeg" alt="Classic Stethoscope" />
          <h2>Classic Stethoscope</h2>
          <p>
            Sound travels directly from inside your body to your provider’s ears
            through flexible tubes.
          </p>
          <button><Link to="/products">Shop</Link></button>
        </div>

        <div className="card warranty">
          <img src="images/download.jpeg" alt="Warranty" />
          <h2>Warranty Services</h2>
          <p>
            Is your stethoscope still under warranty? We'll repair it for free! We
            also offer affordable post-warranty repairs.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      {/* Video Section */}
      <div className="stetvideo">
        <iframe
          width="906"
          height="371"
          src="https://www.youtube.com/embed/fTUzGzJdAno"
          title="Choosing the Right 3M™ Littmann® Stethoscope for Your Clinical Needs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
     
      {/* Contact Section */}
      <section className="contact">
        <img className='imgC' src="images/OIP.jpeg" alt="Contact Us" />
        <div className="contact-text">
          <h2>Got Questions? We’re Here to Help!</h2>
          <p>
            Have any questions, suggestions, or comments? Reach out and let us
            know — we’d love to hear from you!
          </p>
          <button className="cta-button">
            <Link to="/contact">Contact Us</Link>
          </button>
        </div>
    
      </section>

    {/*bottom part of customer reviews */}
      <section className="customer-reviews">
        <h2>What Our Customers Are Saying</h2>
        <Slider {...sliderSettings}>
          {reviews.map((review, index) => (
            <div key={index} className="review-slide">
              <div className="review-card">
                
                <div className="review-content">
                  <h3>{review.name}</h3>
                  <p>{review.review}</p>
                  <p><strong>Rating:</strong> {`${"⭐".repeat(review.rating)}${"☆".repeat(5 - review.rating)}`}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default Home;
