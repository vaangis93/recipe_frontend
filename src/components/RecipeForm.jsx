import React, { useState } from "react";
import apiFacade from "../apiFacade";

function RecipeForm() {

  const [formData, setFormData] = useState({
    title: "",
    ingredientsAndGrams: "",
    description: "",
    difficulty: "MEDIUM", // Default value for the dropdown
  });

  const [recipe, setRecipe] = useState(null);

  // List of difficulty levels
  const difficulties = ["VERY_EASY", "EASY", "MEDIUM", "HARD", "VERY_HARD"];

  // Handle form input change
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // !!!!!!! Updated this line to send formData as the body when calling fetchData
    try {
      const response = await apiFacade.fetchData("/recipes", setRecipe, "POST", true, formData); // !!!!!!! Added formData as an argument to send it as the body
      console.log("Recipe created successfully:", data);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json(); // Parse the JSON response
      console.log("Recipe created successfully:", data);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };
  

  return (
    <div>
      <h2>Create a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredientsAndGrams">Ingredients (with grams):</label>
          <textarea
            id="ingredientsAndGrams"
            value={formData.ingredientsAndGrams}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            id="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
          >
            {difficulties.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Create Recipe</button>
      </form>
      <p>Created recipe: {JSON.stringify(recipe)}</p>
    </div>
  );
}

export default RecipeForm;
