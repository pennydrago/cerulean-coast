import BookingForm from "./BookingForm";
import BookingsList from "./BookingsList";
import { useEffect, useState } from "react";

export default function Bookings() {
  
  const [bookingList, setBookingList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/reservations")
      .then((response) => response.json())
      .then((bookings) => setBookingList(bookings))
  }, []);

  function handleBookingFormSubmit(bookingData) {    
    fetch("http://localhost:4000/reservations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((newBooking) => setBookingList([...bookingList, newBooking]))
  }
  
  return (
    <div>
      <div className="container">
        <h2>Bookings</h2>
        <BookingForm onBookingFormSubmit={handleBookingFormSubmit}/>
        <BookingsList bookingList={bookingList} />
      </div>
    </div>
  );
}