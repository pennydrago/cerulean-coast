import {Link} from "react-router-dom";

export default function Home() {
  function scrollToTop() {
    window.scrollTo(0,0)
  }
  
  return (
    <div>
      {/* Banner and about section */}
      <div className="banner">
      </div>
      <div className="container">
        <p>Our restaurant is located in Coastal Town, with spectacular views of the ocean. We welcome you to enjoy a meal from a variety of choices for lunch or dinner. We are also open for afternoon refreshments.</p>
        <p>We aim to create a chilled atmosphere of delicious food and stunning views over the water.</p>
        <div className="container-flex-even">
          <button className="button-secondary" onClick={scrollToTop}><Link className="button-link" to="/meals">View meals</Link></button>
          <button className="button-secondary" onClick={scrollToTop}><Link className="button-link" to="/desserts">View desserts</Link></button>
        </div>
        <hr />
        {/* Open hours */}
        <h2>Open hours</h2>
        <p>Monday to Sunday</p>
        <p>12pm to 10pm</p>
        <button onClick={scrollToTop}><Link className="button-link" to="/bookings">Make a booking</Link></button>
        <hr />
        {/* Contact details */}
        <h2>Contact us</h2>
        <p>25 Ocean Boulevard</p>
        <p>Coastal Town</p>
        <p>Phone: 2345 6789</p>
        <p>Email: info@ceruleancoastrestaurant.com</p>
      </div>
    </div>
  );
}