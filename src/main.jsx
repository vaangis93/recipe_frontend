import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import About from "./pages/About.jsx";
import Recipe from "./pages/Recipe.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Brainstorm from "./pages/Brainstorm.jsx";
import RecipeForm from "./pages/RecipeForm.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="home" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="recipe" element={<Recipe />} />
      <Route path="/recipeform" element={<RecipeForm/>} />
      <Route path="brainstorm" element={<Brainstorm />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
