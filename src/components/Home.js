export default function Home() {
  return (
    <div>
      {/* Banner and about section */}
      <div className="banner">
      </div>
      <div className="container">
        <p>Our restaurant is located in Coastal Town, with spectacular views of the ocean. We welcome you to enjoy a meal from a variety of choices for lunch or dinner. We are also open for afternoon refreshments.</p>
        <p>We aim to create a chilled atmosphere of delicious food and stunning views over the water.</p>
        {/* Open hours */}
        <h3>Open hours</h3>
        <p>Monday to Sunday</p>
        <p>12pm to 10pm</p>
        {/* Contact details */}
        <h3>Contact us</h3>
        <p>25 Ocean Boulevard</p>
        <p>Coastal Town</p>
        <p>Phone: 2345 6789</p>
        <p>Email: info@ceruleancoastrestaurant.com</p>
      </div>
    </div>
  );
}