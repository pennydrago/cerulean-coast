import FoodCard from "./FoodCard";

export default function FoodList({foodItems}) {
  return (
    <div>
      {foodItems.map((foodItem) =>
          <FoodCard key={foodItem.id} foodItem={foodItem} />
        )}
    </div>
  );
}