import React, { useState } from "react";
import apiFacade from "../apiFacade";
import { Croissant } from "lucide-react";
import "../styles/RecipeStyles.css";

function RecipeForm() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [succesMsg, setsuccesMsg] = useState(null);
  const [recipe, setRecipe] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    ingredientsAndGrams: "",
    description: "",
    difficulty: "MEDIUM", // Default value for the dropdown
  });

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
  const handleSubmit = (event) => {
    event.preventDefault(); // this prevents the page from reloading when the form is submitted

    apiFacade.fetchData(
        "/recipes",
        (data) => {
          // Handle data returned by the API
          if (data?.error) { // the data?.error checks if the data is NOT null or undefined. so if it IS null or undefined it will not run the code inside the if statement. so we can see if it gets not data instead of an error.
              setErrorMessage("YO! You need to be Admin to create an recipe or ask an adult");
              console.log("No data received from the API.");
           
            console.log("DATA!!!!!" , data);
          } else {
             setsuccesMsg("Recipe created successfully!");
             console.log("Recipe created successfully!");
          
          }
        },
        "POST",
        true,
        formData
      )
      .catch((error) => {
        // Handle errors returned by the API
        console.error("Error creating recipe:", error);

        // Custom message for 401 errors
        if (error.status === 401) {
          setErrorMessage(
            "YO! You need to be Admin to create a recipe or ask an adult."
          );
          console.log(
            "YO! You need to be Admin to create a recipe or ask an adult."
          );
          
        } else {
          setErrorMessage("An unexpected error occurred. Please try again.");
          console.log("Unexpected error:", error);
        }
      });
  };

  return (
    <div>
      <h2>Create a New Recipe</h2>
      <Croissant />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"> Title:</label>
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

      {errorMessage && (
        <div className="error-message">
          {" "}
          <p>{errorMessage}</p>
        </div>
      )}
      {succesMsg && (
        <div className="error-message">
          {" "}
          <p>{succesMsg}</p>
        </div>
      )}
    </div>
  );
}

export default RecipeForm;
