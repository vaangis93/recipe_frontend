import { useState, useEffect } from "react";
import blabla from "../apiFacade";
import { Link } from "react-router";
import "../styles/RecipeStyles.css";
// import * as StyledComponents from "../styles/RecipeStyle";
import {
  RecipeContainer,
  RecipeCard,
  RecipeTitle,
  RecipeDescription,
  DifficultyBadge,
  ActionButton,
  RecipeHeadline,
  DropDownContainer,
  DropDownSelect,
  OptionSelectStyle,
} from "../styles/RecipeStyle";
import Modal from "../components/Modal";

function Recipe() {
  const [dataFromApiObject, setdataFromApiObject] = useState({}); // if endpoint returns an object
  const [dataFromApiArray, setdataFromApiArray] = useState([]); // if endpoint returns an array
  const [checkDataType, setcheckDataType] = useState("");
  const [selectedDifficulty, setselectedDifficulty] = useState("");
  const [errorDeleteMessage, seterrorDeleteMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ----- Modals ----- //
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleAction = () => { closeModal()};
  



  // List of difficulty levels
  const enumDifficulties = ["VERY_EASY", "EASY", "MEDIUM", "HARD", "VERY_HARD"];

  // to check if its one recipe(object) or all/more recipes(array)
  function checkType(data) {
    if (Array.isArray(data) === false) {
      setdataFromApiObject(data);
      console.log("returned a Object");
      return setcheckDataType("object", console.log(dataFromApiObject));
    } else {
      setdataFromApiArray(data);
      console.log("returned a array");
      console.log(dataFromApiArray);
      return setcheckDataType("array");
    }
  }

  const handleClickToFetchAllRecipe = () => {
    blabla.fetchData("/recipes", (data) => checkType(data), "GET", true); // /recipes is the endpoint for READALL recipes = array
  };

  const handleClickToFetchASingleRecipe = () => {
    blabla.fetchData("/recipes/1", (data) => checkType(data), "GET", true); // find recipe by id = object
  };

  //   --------------------- the useEffect is used to fetch data from the api when the page loads for the first time -----------//

  useEffect(() => {
    // (urlPath, callback(the data coming back),  method(what http method = eg. GET,POST), addToken, body)
    blabla.fetchData("/recipes", (data) => checkType(data), "GET", true); // /recipes is the endpoint for READALL recipes = array
    console.log("useEffect is running");
  }, []);

  // Handle category selection
  const handleDifficultyChange = (event) => {
    setselectedDifficulty(event.target.value); // Update selected category
  };

  // for when i have the time for the logic to click a recipe window and get info as a modal.
  function handleClickToPullInfo(recipe) {
    setdataFromApiArray(recipe); // Update the state with the selected recipe
  }
  console.log("Selected recipes:", dataFromApiArray);

  // Filter recipes based on the selected difficulty
  const filterSelectedDifficulty = selectedDifficulty
    ? dataFromApiArray.filter(
        (recipe) => recipe.difficulty === selectedDifficulty
      )
    : dataFromApiArray;

  function filterToDifficulty() {
    // make a variable where we filter only for difficulty
    const filterDifficulties = dataFromApiArray.filter(
      (recipe) => recipe.difficulty
    );
    // we make an spreadoperator so we pull the elements out.and making a new Set
    //then iterating through all the difficulties with map
    const filterForDiffDublicatess = [
      ...new Set(
        filterDifficulties.map(
          (dataFromApiArray) => dataFromApiArray.difficulty
        )
      ),
    ];
    console.log(filterForDiffDublicatess);
    return (
      <>
        <DropDownContainer>
          <label htmlFor="difficulty-select">Filter by difficulty:</label>

          {/* {enumDifficulties.map((level) => ( the start of map */}

          <DropDownSelect
            id="difficulty"
            value={selectedDifficulty}
            onChange={handleDifficultyChange}
            required
            diff={selectedDifficulty}
          >
            <option value="">Select difficulty</option>
            {enumDifficulties.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </DropDownSelect>
        </DropDownContainer>
      </>
    );
  }

  const handleDelete = (id) => {
    blabla.fetchData(
      `/recipes/${id}`,
      (data) => {
        if (data?.error) {
          // data?.error means if its not null or undefined it will be error
          seterrorDeleteMessage(data.error); // Set error message if there is one
        } else {
          setdataFromApiArray(
            dataFromApiArray.filter((recipe) => recipe.id !== id)
          ); // Update state on success
          // setdataFromApiObject(data); // Update state on success
        }
      },
      "DELETE",
      true
    );
  };

  return (
    <>
      <RecipeHeadline>Recipes</RecipeHeadline>

      <Link
        to="/recipeform"
        style={{
          color: "#1e3a8a", // Use quotes for color value
          display: "flex", // Use camelCase for property names
          justifyContent: "center", // CamelCase for CSS properties
        }}
      >
        Create a New Recipe
      </Link>

      {filterToDifficulty()}
      {errorDeleteMessage &&
        (() => {
          alert(errorDeleteMessage); // to make a pop up alert
          seterrorDeleteMessage(""); // to clear the error message;
        })()}

      <RecipeContainer>
        {filterSelectedDifficulty.map((recipe, index) => (
          <RecipeCard key={index} onClick={openModal}>
               <Modal 
                isOpen={isModalOpen}
                onClose={handleAction}
                onConfirm={closeModal}
                title="Do you want to proceed?"
                confirmText="Proceed"
                cancelText="Cancel"
                >
       
        </Modal>
            <RecipeTitle>
              <h4>Title : {recipe.title}</h4>
            </RecipeTitle>

            <h5>Difficulty : {recipe.difficulty} </h5>
            <DifficultyBadge diff={recipe.difficulty}></DifficultyBadge>
            <div>Ingredients: {recipe.ingredientsAndGrams}</div>
            <RecipeDescription>
              <h5> Description : {recipe.description}</h5>
            </RecipeDescription>
            <div>
              <ActionButton onClick={() => handleDelete(recipe.id)}>
                Delete
              </ActionButton>
              <ActionButton primary>Edit</ActionButton>
            </div>
          </RecipeCard>
        ))}
      </RecipeContainer>
    </>
  );
}

export default Recipe;
