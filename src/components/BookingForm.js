import { useState } from "react";

export default function BookingForm() {
  
  const initialFormData = {
    booking_date: "",
    booking_time: "",
    booking_guests: "",
  }

  const [formData, setFormData] = useState(initialFormData);

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    setFormData(initialFormData)
  }
    
  return (
    <div>
      <form id="booking-form" onSubmit={handleSubmit}>
        <h3>Make a booking</h3>
        <p>Book a table at our restaurant using the form below.</p>
        <p>We are open for lunch 12pm to 3pm and for dinner 6pm to 10pm.</p>
        <p>
          <label htmlFor="date">Date*</label>
          <input type="date" id="date" name="booking_date" min="2023-07-01" max="2023-12-31" value={formData.booking_date} onChange={handleChange} required />
        </p>
        <p>
          <label htmlFor="time">Time*</label>
          <input type="time" id="time" name="booking_time" min="12:00" max="22:00" value={formData.booking_time} onChange={handleChange} required />
        </p>
        <p>
          <label htmlFor="guests">Number of guests (max. 20)*</label>
          <input type="number" id="guests" name="booking_guests" min="1" max="20" size="5" value={formData.booking_guests} onChange={handleChange} required/>
        </p>
        <button type="submit">Submit</button>
        <p id="note">*Required</p>
      </form>
    </div>
  );
}