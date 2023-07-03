import BookingForm from "./BookingForm";
import BookingsList from "./BookingsList";
import { useState } from "react";

export default function Bookings() {
  
  const [bookingList, setBookingList] = useState([]);

  function handleBookingFormSubmit(newBooking) {
    setBookingList([...bookingList, newBooking]);
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