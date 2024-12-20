import styled from "styled-components";

// Wrapper for the recipe cards section
export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

// Individual recipe card
export const RecipeCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  border-color: black;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  max-width: 300px;
  min-width: 250px;
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

// Title of the recipe
export const RecipeTitle = styled.h4`
  font-size: 1.2em;
  color: black;
  margin: 0;
  text-align: center;
`;

// Description text
export const RecipeDescription = styled.p`
  font-size: 0.95em;
  color: #666;
  line-height: 1.4;
  margin: 0;
`;

// Difficulty badge
// Difficulty badge
export const DifficultyBadge = styled.span.attrs((props) => ({ // THE .attrs() METHOD IS USED TO ADD PROPS TO THE STYLED COMPONENT
    diff: props.diff,
  }))`
    display: inline-block;
    padding: 50px 10px;
    font-size: 0.85em;
    color: blue;
    background-color: ${(props) => {
      switch (props.diff) {
        case "VERY_EASY":
          return "#28a745"; // Green
        case "EASY":
          return "#8bc34a"; // Light Green
        case "MEDIUM":
          return "#ffc107"; // Yellow
        case "HARD":
          return "#ff5722"; // Orange
        case "VERY_HARD":
          return "transparent"; // Transparent for image
        default:
          return "#007bff"; // Blue
      }
    }};
    
    background-image: ${(props) => {
      switch (props.diff) {
        case "VERY_HARD":
          return "url('/pics/gondon.png')"; // Image for VERY_HARD
        case "VERY_EASY":
          return "url('/pics/coolCat.jpg')"; // Image for VERY_EASY
        default:
          return "none"; // No image for other cases
      }
    }};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 15px;
    text-align: center;
  `;
  
   
    
  


// Action buttons
export const ActionButton = styled.button`
  background-color: ${(props) => (props.primary ? "#007bff" : "#dc3545")};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#c82333")};
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;
