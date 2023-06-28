export default function BookingForm() {
  return (
    <div>
      <form id="booking-form">
        <h3>Make a booking</h3>
        <p>Book a table at our restaurant using the form below.</p>
        <p>We are open for lunch 12pm to 3pm and for dinner 6pm to 10pm.</p>
        <p>
          <label for="date">Date*</label>
          <input type="date" id="date" name="booking_date" min="2023-07-01" max="2023-12-31" required />
        </p>
        <p>
          <label for="time">Time*</label>
          <input type="time" id="time" name="booking_time" min="12:00" max="22:00" required />
        </p>
        <p>
          <label for="guests">Number of people (max. 20)*</label>
          <input type="number" id="guests" name="booking_guests" min="1" max="20" size="5" required/>
        </p>
        <button>Submit</button>
        <p id="note">*Required</p>
      </form>
    </div>
  );
}