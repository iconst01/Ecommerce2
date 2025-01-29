import { useState } from "react";
import axios from "axios";
import './../styles/ContactForm.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters.");
      return;
    }

    setErrorMessage(""); // Clear error message if validation passes

    try {
      await axios.post("http://localhost:5000/contact", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Reset form
    } catch {
      setErrorMessage("Error sending message.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>

      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
