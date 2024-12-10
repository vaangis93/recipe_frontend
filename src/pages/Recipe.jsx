import React, { useState, useEffect } from "react";
import blabla from "../apiFacade";
import { data } from "react-router";

function Recipe() {
  const [dataFromApiObject, setdataFromApiObject] = useState({}); // if endpoint returns an object
  const [dataFromApiArray, setdataFromApiArray] = useState([]); // if endpoint returns an array
  const [checkDataType, setcheckDataType] = useState("");

  // to check if its one recipe(object) or all/more recipes(array)
  function checkType(data) {
    if (Array.isArray(data) === false) {
      setdataFromApiObject(data);
      console.log("returned a Object");
      return setcheckDataType("object", console.log(dataFromApiObject));
    } else {
      setdataFromApiArray(data);
      console.log("returned a array");
      console.log(dataFromApiArray)
      return setcheckDataType("array"); 
    }
  }

  const handleClickToFetchAllRecipe = () => {
    blabla.fetchData("/recipes", (data) => checkType(data), "GET", true); // /recipes is the endpoint for READALL recipes = array
    
  };

  const handleClickToFetchASingleRecipe = () => {
    blabla.fetchData("/recipes/1", (data) => checkType(data), "GET", true); // find recipe by id = object
    
};

  //   //--------------------- the useEffect is used to fetch data from the api when the page loads for the first time -----------//
  //   useEffect(() => {
  //     // (urlPath, callback(the data coming back),  method(what http method = eg. GET,POST), addToken, body)
  //     blabla.fetchData("/recipes", (data) => checkType(data), "GET", true); // /recipes is the endpoint for READALL recipes = array
  //   }, []);

  return (
    <>
      <h1>Recipe</h1>

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
    </>
  );
}

export default Recipe;
