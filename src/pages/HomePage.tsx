import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecipes } from "../features/recipesSlice.ts";
import axios from "axios";
import RecipeList from "../components/RecipeList.tsx";
import SearchBar from "../components/SearchBar.tsx";
import { RootState } from "../store/store.ts";

const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const HomePage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.recipes.recipes);

  const searchRecipes = async (searchTerm: string) => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}${searchTerm}`);
      dispatch(setRecipes(response.data.meals || []));
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchBar onSearch={searchRecipes} />
      {loading ? <p>Loading...</p> : <RecipeList recipes={recipes} />}
    </div>
  );
};

export default HomePage;
