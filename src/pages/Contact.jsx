import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";//contactform component for the user to use to contact 
import Footer from "../components/Footer";

//contact component represent the contact us pg
const Contact = () => {
  return (
    <div className="contact-page">
    <Navbar />
    <div className="content">
      <h1 className="Contact">Contact Us</h1>
      {/*include the contactform component to display the contact form */}
      <ContactForm />
    </div>
    <Footer />
  </div>
);
};


export default Contact;
