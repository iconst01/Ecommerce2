import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";


const Contact = () => {
  return (
    <div className="contact-page">
    <Navbar />
    <div className="content">
      <h1 className="Contact">Contact Us</h1>
      <ContactForm />
    </div>
    <Footer />
  </div>
);
};


export default Contact;
