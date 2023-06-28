import FoodCard from "./FoodCard";

export default function Food({title, foodItems}) {
  return (
    <div>
      <div className="container">
        <h2>{title}</h2>
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}