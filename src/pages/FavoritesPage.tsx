import React from "react";
import { useSelector } from "react-redux";
import RecipeList from "../components/RecipeList.tsx";
import { RootState } from "../store/store.ts";

const FavoritesPage: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.recipes.favorites);

  return (
    <div>
      <h2>Favorite Recipes</h2>
      <RecipeList recipes={favorites} />
    </div>
  );
};

export default FavoritesPage;
