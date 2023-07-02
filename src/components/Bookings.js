import BookingForm from "./BookingForm";
import BookingCard from "./BookingCard";
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
        <h3>Confirmed bookings</h3>
        {bookingList.length === 0 ? "There are no confirmed bookings." : ""}
        <div className="container-flex">

          {/* need to change index to bookingItem.id when using json server */}

          {bookingList.map((bookingItem, index) => {
            return <BookingCard key={index} bookingDate={bookingItem.booking_date} bookingTime={bookingItem.booking_time} bookingGuests={bookingItem.booking_guests} />
          })}

        </div>
      </div>
    </div>
  );
}