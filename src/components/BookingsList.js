import BookingCard from "./BookingCard";

export default function BookingsList({bookingList}) {
  return (
    <div>
      <h3>Confirmed bookings</h3>
        {bookingList.length === 0 ? "There are no confirmed bookings." : ""}
        <div className="container-flex">
          {bookingList.map((bookingItem) => {
            return <BookingCard key={bookingItem.id} bookingDate={bookingItem.booking_date} bookingTime={bookingItem.booking_time} bookingGuests={bookingItem.booking_guests} />
          })}
        </div>
    </div>
  );
}