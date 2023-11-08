import { useState, useEffect } from "react";
import styles from "./ContactForm.module.css";
import PageNav from "../components/PageNav";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

function ContactForm() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    appointmentTime: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const firstItem = data[0];
          setFormData({
            firstName: firstItem.firstName,
            lastName: firstItem.lastName,
            email: firstItem.email,
            phoneNumber: firstItem.phoneNumber,
            appointmentTime: null,
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (moment) => {
    setFormData({ ...formData, appointmentTime: moment });
  };

  const handleReset = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (
      formData.firstName === "" ||
      formData.lastName === "" ||
      formData.email === ""
    ) {
      alert(
        "Please fill out the required fields (First Name, Last Name, and Email)."
      );
      return;
    }

    console.log(formData);

    // Clear the form data by setting it back to its initial state
    setFormData(initialFormData);

    // Display the success message
    setFormSubmitted(true);

    // Reset the success message after a delay (e.g., 5 seconds)
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <div className={styles.form}>
      <PageNav />
      <div className={styles.pageForm}>
        <h2>Registracija</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">Vardas:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Pavardė:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">El. paštas:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Tel. nr.:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="appointmentTime" className={styles.appointment}>
              Pasirinkite susitikimo laiką:
            </label>
            <Datetime
              inputProps={{ name: "appointmentTime" }}
              value={formData.appointmentTime}
              onChange={handleDateChange}
            />
          </div>
          <button type="submit">Pateikti</button>
          <button type="button" onClick={handleReset}>
            Panaikinti
          </button>
          {formSubmitted && (
            <div className={styles.successMessage}>Registracija sėkminga!</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
