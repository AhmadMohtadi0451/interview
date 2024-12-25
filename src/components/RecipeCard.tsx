import React from "react";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/recipesSlice.ts";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

interface RecipeCardProps {
  recipe: {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
  };
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const dispatch = useDispatch();

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={recipe.strMealThumb}
        alt={recipe.strMeal}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {recipe.strMeal}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => dispatch(toggleFavorite(recipe))}
        >
          Toggle Favorite
        </Button>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
