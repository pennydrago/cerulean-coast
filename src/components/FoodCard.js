import beachImage from "../images/fabio-fistarol-vkLv1LP_xCw-unsplash.jpg";

export default function FoodCard() {
  return (
    <div className="food-card">
      <div className='food-image'>
        <img src={beachImage} alt="beach"/>
      </div>
      <div className="food-info">
        <h3>Title of Food</h3>
        <p>Description of food: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  );
}