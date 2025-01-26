import React from "react";
import { useParams, Link } from "react-router-dom";

const foodItems = [
  { id: 1, name: "Pizza", description: "Cheesy and delicious!", recipe: "Bake with cheese and toppings." },
  { id: 2, name: "Burger", description: "Juicy and flavorful!", recipe: "Grill the patty and assemble." },
  { id: 3, name: "Pasta", description: "Rich and creamy sauce.", recipe: "Cook with sauce and herbs." },
];

const FoodDetails = () => {
  const { id } = useParams();
  const food = foodItems.find((item) => item.id.toString() === id);

  return food ? (
    <div>
      <h2>{food.name}</h2>
      <p>{food.description}</p>
      <p><strong>Recipe:</strong> {food.recipe}</p>
      <Link to="/">Back to Home</Link>
    </div>
  ) : (
    <p>Food not found.</p>
  );
};

export default FoodDetails;
