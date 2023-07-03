import BookingCard from "./BookingCard";

export default function BookingsList({bookingList}) {
  return (
    <div>
      <h3>Confirmed bookings</h3>
        {bookingList.length === 0 ? "There are no confirmed bookings." : ""}
        <div className="container-flex">

          {/* need to change index to bookingItem.id when using json server */}

          {bookingList.map((bookingItem, index) => {
            return <BookingCard key={index} bookingDate={bookingItem.booking_date} bookingTime={bookingItem.booking_time} bookingGuests={bookingItem.booking_guests} />
          })}
        </div>
    </div>
  );
}