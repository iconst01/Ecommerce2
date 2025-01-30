import { useState } from "react";//Importing useState hook from React
// import axios from "axios";//Importing axios for making HTTP request 
import './../styles/ContactForm.css'//Importing custom styles for the contact form

const ContactForm = () => {
  //initializing errorMessage state to store validation or error messages 
  const [formData, setFormData] = useState({ //useState is the values and formData box where value are kept and setFormData update value 
    name: "",
    email: "",
    message: "",
  });
//initializing state to store error message
  const [errorMessage, setErrorMessage] = useState("");
//handlechange function to update state values for te form fields as user types 
  const handleChange = (e) => {
    //spread the existing formData and update and update only the field that changed (using e.target.name to identify the field)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//handlesubmit function to handle form submission and validation 
  const handleSubmit = async (e) => {
    e.preventDefault();//prevents the default form submission behavior (which will reload the page)

    // Basic validation checks
    //check if all fields are filled out 
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("All fields are required.");//set error message if any field is empty
      return;//stop further execution if validation fails
    }
//check if email is in a valid format using a regular expression
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage("Please enter a valid email.");//set error messsage if email format is invalid 
      return;//stop further execution if validation fails
    }
//check if the message is at least 10 characters long 
    if (formData.message.length < 10) {
      setErrorMessage("Message must be at least 10 characters.");//error message if its to short
      return;//stop further execution if validation fails
    }

    setErrorMessage(""); // Clear error message if validation passes

  };

  return (
    <form onSubmit={handleSubmit}>{/*form submission triggers handlesubmit */}
      <div className="form-group">{/*name input fiel */}
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}//controlled input value
          onChange={handleChange}//updates state when user types
        />
      </div>

      <div className="form-group">{/* email input field */}
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}//controlled input value
          onChange={handleChange}// updates state when user types 
        />
      </div>

      <div className="form-group">{/*message input field*/}
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
      </div>
{/*display error message if validation fails */}
      {errorMessage && <div className="error">{errorMessage}</div>}

      <button type="submit">Submit</button>{/*submit button*/}
    </form>
  );
};

export default ContactForm;
