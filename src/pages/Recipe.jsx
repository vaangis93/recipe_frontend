import { useState, useEffect } from "react";
import blabla from "../apiFacade";
import { Link } from "react-router";
import croissant from "../components/Croissant";



function Recipe() {
  const [dataFromApiObject, setdataFromApiObject] = useState({}); // if endpoint returns an object
  const [dataFromApiArray, setdataFromApiArray] = useState([]); // if endpoint returns an array
  const [checkDataType, setcheckDataType] = useState("");
  const [selectedDifficulty, setselectedDifficulty] = useState("");

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
  }, []);

  // Handle category selection
  const handleDifficultyChange = (event) => {
    setselectedDifficulty(event.target.value); // Update selected category
  };

//   const getUniqueDifficulties = () => {
//     return [...new Set(dataFromApiArray.map((recipe) => recipe.difficulty))];
//   };

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
        <h3>
          ------------------------Dropdown filter bydifficulty----------------------------------{" "}
        </h3>
        <div>
        <label htmlFor="difficulty-select">Filter by difficulty:</label>
        <select
          id="difficulty"
          value={selectedDifficulty} // !!!!!!!!!!!! Removed .difficulty
          onChange={handleDifficultyChange}
          required
          >
            
            <option value="">All difficulties</option>
            {enumDifficulties.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
    
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Recipe</h1>
    
      
      <br />
      <h3>
        ------------------------------Create recipe
        form/input-----------------------------------
      </h3>
      <Link to="/recipeform">Create a New Recipe</Link>

      {/* <RecipeForm /> */}
      <br />
      <h3>
        -----------------------------Buttons to get all or single
        recipe-------------------------
      </h3>
      {checkDataType === "array" &&
        dataFromApiArray.map((data) => <h3 key={data.id}>{data.title}</h3>)}
      {checkDataType === "object" && <h3>{dataFromApiObject.title}</h3>}

      <button onClick={handleClickToFetchAllRecipe}>
        {" "}
        Get all the recipes here!{" "}
      </button>

      <button onClick={handleClickToFetchASingleRecipe}>
        {" "}
        Get a single recipe here!{" "}
      </button>

      {filterToDifficulty()}

      <br />
      <h3>Recipe Information</h3>
      <table>
        <thead>
         {/* for when i need to click on the single recipe window and get info-->  <tr onClick={handleClickToPullInfo}></tr> */}
          <tr onClick={handleClickToPullInfo}>
            <th>Title</th>
            <th>Ingredients</th>
            <th>Description</th>
            <th>Difficulty</th>
          </tr>
        </thead>
        <tbody>
          {filterSelectedDifficulty.map((recipe, index) => (
            // for when i need to click on the single recipe window and get info--> <tr onClick={() => handleClickToPullInfo(recipe)} key={index}>
            <tr key={index}> 
            <td>{recipe.title}</td>
              <td>{recipe.ingredientsAndGrams}</td>
              <td>{recipe.description}</td>
              <td>{recipe.difficulty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Recipe;
