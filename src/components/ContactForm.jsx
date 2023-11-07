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

  const [formData, setFormData] = useState({ ...initialFormData });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.contacts) {
          setFormData(data.contacts[0]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (moment) => {
    setFormData({
      ...formData,
      appointmentTime: moment,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    console.log(formData);
    // You can send the data to the server here if needed.
  };

  const handleReset = () => {
    setFormData({ ...initialFormData });
    setFormSubmitted(false);
  };

  if (formData.length === 0) {
    return <div>Loading...</div>;
  }

  const contact = formData;

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
              value={contact.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="lastName">Pavardė:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={contact.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">El. paštas:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={contact.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Tel. nr.:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={contact.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="appointmentTime" className={styles.appointment}>
              Pasirinkite susitikimo laiką:
            </label>
            <Datetime
              inputProps={{ name: "appointmentTime" }}
              value={contact.appointmentTime}
              onChange={handleDateChange}
            />
          </div>
          <button type="submit">Register</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </form>
        {formSubmitted && <div>Registracija sekminga!</div>}
      </div>
    </div>
  );
}

export default ContactForm;
