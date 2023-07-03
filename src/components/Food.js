import FoodList from "./FoodList";

export default function Food({title, foodItems}) {
  return (
    <div>
      <div className="container">
        <h2>{title}</h2>
        <FoodList foodItems={foodItems}/>
      </div>
    </div>
  );
}