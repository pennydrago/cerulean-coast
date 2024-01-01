import BookingForm from "./BookingForm";
import BookingsList from "./BookingsList";
import { useEffect, useState } from "react";

export default function Bookings() {
  
  const [bookingList, setBookingList] = useState([]);

  function handleBookingFormSubmit(bookingData) {
    setBookingList([...bookingList, bookingData])
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