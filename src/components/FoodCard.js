export default function FoodCard({foodItem, onModalShow}) {
  
  function handleClick() {
    onModalShow(foodItem);
  }
  
  return (
      <div className="food-card" onClick={handleClick}>
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