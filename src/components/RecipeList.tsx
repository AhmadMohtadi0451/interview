import React from "react";
import { Box } from "@mui/material";
import RecipeCard from "./RecipeCard.tsx";

interface RecipeListProps {
  recipes: Array<{
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  }>;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes }) => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="center"
      gap={2} // Space between items
    >
      {recipes.map((recipe) => (
        <Box
          key={recipe.idMeal}
          flex="1 1 calc(33.333% - 16px)" // Three items per row
          maxWidth="calc(33.333% - 16px)"
          boxSizing="border-box"
        >
          <RecipeCard recipe={recipe} />
        </Box>
      ))}
    </Box>
  );
};

export default RecipeList;
