import { Link } from "react-router";
import styled from "styled-components";

// Wrapper for the recipe cards section
export const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Wrap the cards to the next row witch means that the cards will be displayed in a row
  gap: 20px;
  justify-content: center; // Center the cards horizontally
  padding: 20px;
  @media (max-width: 768px) {
    gap: 15px;
  }
`;

// Individual recipe card
export const RecipeCard = styled.div`
  background-color: white; // Sets background color to white
  border: 1px solid #ddd; // Adds a light border around the card
  border-radius: 8px; // Rounds the corners of the card
  border-color: black; // Sets border color to black
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); // Adds a subtle shadow
  padding: 15px; // Adds padding inside the card
  max-width: 300px; // Sets maximum width of the card
  min-width: 250px; // Sets minimum width of the card
  text-align: left; // Aligns text to the left
  display: flex; // Uses flexbox layout
  flex-direction: column; // Stacks content vertically
  gap: 10px; // Adds space between items
  transition: transform 0.2s ease-in-out; // Smooth transition for transform effect

  &:hover {
    transform: translateY(-5px); // Moves the card up on hover
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15); // Darkens shadow on hover
  }

  @media (max-width: 768px) {
    max-width: 100%; // Makes card full-width on smaller screens
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
export const DifficultyBadge = styled.span.attrs((props) => ({
  // THE .attrs() METHOD IS USED TO ADD PROPS TO THE STYLED COMPONENT
  diff: props.diff,
}))`
  display: inline-block;
  padding: 50px 10px;
  font-size: 0.85em;
  color: green;
  background-color: ${(props) => {
    switch (props.diff) {
      case "VERY_EASY":
        return "#transparent";
      case "EASY":
        return "#87ceeb";
      case "MEDIUM":
        return "#1e90ff";
      case "HARD":
        return "#0000cd";
      case "VERY_HARD":
        return "transparent"; // Transparent for image
      default:
        return "#007bff"; // Blue
    }
  }};

  background-image: ${(props) => {
    switch (props.diff) {
      case "VERY_EASY":
        return "url('/pics/coolCat.jpg')"; // Image for VERY_EASY
      case "EASY":
        return "url('/pics/1.png')"; //
      case "MEDIUM":
        return "url('/pics/2.png')"; //
      case "HARD":
        return "url('/pics/3.png')"; //
      case "VERY_HARD":
        return "url('/pics/gondon.png')"; // Image for VERY_HARD

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
  background-color: ${(props) => (props.primary ? "blue" : "#dc3545")};
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

// Link styled component. not used atm. didnt get it to quite work. so inline styling is used instead
export const LinkStyle = styled(Link)`
  // this is how you style a Link component or other components
  background-color: rgb(74, 170, 67);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgb(59, 136, 54);
  }

  @media (max-width: 768px) {
    font-size: 0.8em;
  }
`;

export const RecipeHeadline = styled.h1`
  color: #1e3a8a;
  display: flex;
  justify-content: center;
  font-size: "24px"; // Larger font size: ;
  font-weight: "bold"; // Bold text
  text-shadow: "1px 1px 2px gray"; // Subtle shadow
  margin: "20px 0 20px 0"; // Margin top and bottom
  padding: 20px 0; // Padding top and bottom
`;

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 20px 0;
  color: #1e3a8a;
  font-size: 20px;
`;



export const DropDownSelect = styled.select.attrs((props) => ({ diff: props.diff}))`
  font-size: 0.90em;
  color: ${(props) =>{
    switch (props.diff) {
      case "VERY_EASY":
        return "green";
      case "EASY":
        return "#87ceeb";
      case "MEDIUM":
        return "#1e90ff";
      case "HARD":
        return "#0000cd";
      case "VERY_HARD":
        return "red"; // Transparent for image
      default:
        return "#1e3a8a"; // Blue
  }}};
`;
export const OptionSelectStyle = styled.option.attrs((props) => ({ diff: props.diff}))`
  font-size: 0.90em;
  color: ${(props) =>{
    switch (props.diff) {
      case "VERY_EASY":
        return "green";
      case "EASY":
        return "#87ceeb";
      case "MEDIUM":
        return "#1e90ff";
      case "HARD":
        return "#0000cd";
      case "VERY_HARD":
        return "red"; // Transparent for image
      default:
        return "#1e3a8a"; // Blue
  }}};
`;
