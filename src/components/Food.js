import FoodCard from "./FoodCard";

export default function Food() {
  return (
    <div>
      <div className="container">
        <h2>Food</h2>
        <FoodCard />
        <FoodCard />
      </div>
    </div>
  );
}