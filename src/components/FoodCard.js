export default function FoodCard({foodItem}) {
  return (
    <div className="food-card">
      <div className='food-image'>
        <img src={foodItem.imageSource} alt={foodItem.imageAltText} />
      </div>
      <div className="food-info">
        <h3>{foodItem.name}</h3>
        <p>{foodItem.description}</p>
      </div>
    </div>
  );
}