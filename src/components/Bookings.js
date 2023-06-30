import BookingForm from "./BookingForm";
import BookingCard from "./BookingCard";

export default function Bookings() {
  return (
    <div>
      <div className="container">
        <h2>Bookings</h2>
        <BookingForm />
        <h3>Confirmed bookings</h3>
        <div class="container-flex">
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </div>
      </div>
    </div>
  );
}