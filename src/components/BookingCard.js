export default function BookingCard({bookingDate, bookingTime, bookingGuests}) {
  return (
    <div className="booking-card">
      <p>Date: {bookingDate}</p>
      <p>Time: {bookingTime}</p>
      <p>Number of guests: {bookingGuests}</p>
    </div>
  );
}